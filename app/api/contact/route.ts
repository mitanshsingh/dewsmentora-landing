import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function validate(payload: Partial<Record<keyof ContactPayload, unknown>>): string | null {
  const name = typeof payload.name === "string" ? payload.name : "";
  const email = typeof payload.email === "string" ? payload.email : "";
  const subject = typeof payload.subject === "string" ? payload.subject : "";
  const message = typeof payload.message === "string" ? payload.message : "";

  if (!name.trim()) return "Please enter your name.";
  if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email address.";
  if (!subject.trim()) return "Please add a subject.";
  if (message.trim().length < 10) return "Please tell us a little more (10 characters minimum).";
  return null;
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

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const name = (payload.name as string).trim();
  const email = (payload.email as string).trim();
  const subject = (payload.subject as string).trim();
  const message = (payload.message as string).trim();

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
    await sql`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${name}, ${email}, ${subject}, ${message})
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
