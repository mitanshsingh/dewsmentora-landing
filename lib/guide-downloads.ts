// PDF guides that admins upload through the DEWS Mentora app. The landing site
// only reads the public listing; the files themselves are served by the API.
// DEWS_API_URL points the site at another backend (e.g. a local one).
const API_URL = process.env.DEWS_API_URL || "https://backend-production-d39a.up.railway.app";
const API_ORIGIN = new URL(API_URL).origin;

// How often /resources/guides picks up newly uploaded or hidden guides. Each
// refresh is an ISR write, and the team's Hobby plan has run out of those
// before, so this stays at an hour rather than minutes.
export const GUIDES_REVALIDATE_SECONDS = 3600;

export type GuideDownload = {
  slug: string;
  title: string;
  description: string | null;
  category: string | null;
  sizeBytes: number | null;
  updatedISO: string;
  viewHref: string;
  downloadHref: string;
};

type GuideOut = {
  slug: string;
  title: string;
  description?: string | null;
  category?: string | null;
  size_bytes?: number | null;
  updated_at: string;
  file_path: string;
};

function toGuideDownload(g: GuideOut): GuideDownload | null {
  if (!g || typeof g.slug !== "string" || typeof g.title !== "string" || typeof g.file_path !== "string") {
    return null;
  }
  if (!URL.canParse(g.file_path, API_URL)) return null;
  // file_path is relative to the API; refuse anything that resolves elsewhere.
  const view = new URL(g.file_path, API_URL);
  if (view.origin !== API_ORIGIN) return null;
  const download = new URL(view);
  download.searchParams.set("download", "1");
  return {
    slug: g.slug,
    title: g.title,
    description: g.description ?? null,
    category: g.category ?? null,
    sizeBytes: g.size_bytes ?? null,
    updatedISO: g.updated_at,
    viewHref: view.toString(),
    downloadHref: download.toString(),
  };
}

// Newest first, as returned by the API.
//
// When the API is down or errors: during `next build` (and in dev) this gives
// [], so the page still builds and just hides the section. On a production
// refresh it throws instead, so Next keeps serving the last good page rather
// than replacing the list with nothing for the next hour.
export async function getGuideDownloads(): Promise<GuideDownload[]> {
  try {
    const res = await fetch(`${API_URL}/guides`, { next: { revalidate: GUIDES_REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`GET /guides responded ${res.status}`);
    const data: unknown = await res.json();
    if (!Array.isArray(data)) throw new Error("GET /guides did not return a list");
    return data.map(toGuideDownload).filter((g): g is GuideDownload => g !== null);
  } catch (error) {
    const building = process.env.NEXT_PHASE === "phase-production-build";
    if (process.env.NODE_ENV === "production" && !building) throw error;
    console.error("Failed to load downloadable guides:", error);
    return [];
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatUpdated(iso: string): string | null {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return `Updated ${date.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" })}`;
}
