import { createHash, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { GUIDES_CACHE_TAG } from "@/lib/guide-downloads";

// Called by the DEWS Mentora API right after an admin uploads, edits, hides or
// deletes a PDF guide, so /resources/guides shows the change on its next visit
// instead of within the hour. The API sends GUIDES_REVALIDATE_SECRET as a
// bearer token; it is set on both the Vercel project and the Railway backend.

// Hashing first gives both sides the same length, which timingSafeEqual needs.
function sameSecret(a: string, b: string): boolean {
  const digest = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(digest(a), digest(b));
}

export async function POST(request: Request) {
  const secret = process.env.GUIDES_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Revalidation is not configured." }, { status: 503 });
  }

  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice("Bearer ".length) : "";
  if (!token || !sameSecret(token, secret)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  // expire: 0 rather than "max": the admin has just made the change, so the
  // next visitor should get the new list, not the stale page while it rebuilds.
  revalidateTag(GUIDES_CACHE_TAG, { expire: 0 });
  return NextResponse.json({ revalidated: true });
}
