import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
} as const;

const MIN_SUBMIT_MS = 1500;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MINUTES = 15;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
  startedAt: number;
};

function validate(payload: Partial<Record<keyof ContactPayload, unknown>>): string | null {
  const name = typeof payload.name === "string" ? payload.name : "";
  const email = typeof payload.email === "string" ? payload.email : "";
  const subject = typeof payload.subject === "string" ? payload.subject : "";
  const message = typeof payload.message === "string" ? payload.message : "";

  if (!name.trim()) return "Please enter your name.";
  if (name.length > MAX_LENGTHS.name) return "That name is too long.";
  if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email address.";
  if (email.length > MAX_LENGTHS.email) return "That email address is too long.";
  if (!subject.trim()) return "Please add a subject.";
  if (subject.length > MAX_LENGTHS.subject) return "That subject is too long.";
  if (message.trim().length < 10) return "Please tell us a little more (10 characters minimum).";
  if (message.length > MAX_LENGTHS.message) return "That message is too long.";
  return null;
}

function isBot(payload: Partial<Record<keyof ContactPayload, unknown>>): boolean {
  const honeypot = typeof payload.company === "string" ? payload.company.trim() : "";
  if (honeypot.length > 0) return true;

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : NaN;
  if (!Number.isFinite(startedAt)) return true;
  const elapsed = Date.now() - startedAt;
  if (elapsed < MIN_SUBMIT_MS) return true;

  return false;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not set; cannot persist contact submissions.");
    return NextResponse.json(
      { ok: false, error: "Server is not configured to accept submissions right now." },
      { status: 500 },
    );
  }

  let payload: Partial<Record<keyof ContactPayload, unknown>>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (isBot(payload)) {
    return NextResponse.json({ ok: true });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const name = (payload.name as string).trim();
  const email = (payload.email as string).trim();
  const subject = (payload.subject as string).trim();
  const message = (payload.message as string).trim();
  const ip = getClientIp(request);

  try {
    const sql = neon(databaseUrl);
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id BIGSERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
    await sql`ALTER TABLE contact_submissions ADD COLUMN IF NOT EXISTS ip TEXT`;

    const [{ count }] = (await sql`
      SELECT COUNT(*)::int AS count
      FROM contact_submissions
      WHERE ip = ${ip} AND created_at > now() - make_interval(mins => ${RATE_LIMIT_WINDOW_MINUTES})
    `) as { count: number }[];

    if (count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { ok: false, error: "Too many messages sent recently. Please try again later." },
        { status: 429 },
      );
    }

    await sql`
      INSERT INTO contact_submissions (name, email, subject, message, ip)
      VALUES (${name}, ${email}, ${subject}, ${message}, ${ip})
    `;
  } catch (error) {
    console.error("Failed to persist contact submission:", error);
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
