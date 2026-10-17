// Preparation material that admins manage through the DEWS Mentora app: one
// section per test (IELTS, GRE, ...), each under a heading, each with its
// PDFs. The landing site only reads the public listing; the files themselves
// are served by the API.
import { API_URL, apiFileLinks } from "@/lib/guide-downloads";
import { PREP_TEST_GROUPS } from "@/lib/site-content";

// How often /resources/preparation picks up changes made in the app. Each
// refresh is an ISR write, and the team's Hobby plan has run out of those
// before, so this stays at an hour, like the guides list.
export const PREP_REVALIDATE_SECONDS = 3600;

export type PrepMaterial = {
  slug: string;
  title: string;
  description: string | null;
  sizeBytes: number | null;
  updatedISO: string;
  viewHref: string;
  downloadHref: string;
};

export type PrepSection = {
  slug: string;
  title: string;
  description: string | null;
  materials: PrepMaterial[];
};

export type PrepGroup = { title: string; sections: PrepSection[] };

type MaterialOut = {
  slug: string;
  title: string;
  description?: string | null;
  size_bytes?: number | null;
  updated_at: string;
  file_path: string;
};

type SectionOut = {
  slug: string;
  title: string;
  description?: string | null;
  group: string;
  materials?: MaterialOut[];
};

function toMaterial(m: MaterialOut): PrepMaterial | null {
  if (!m || typeof m.slug !== "string" || typeof m.title !== "string") return null;
  const links = apiFileLinks(m.file_path);
  if (!links) return null;
  return {
    slug: m.slug,
    title: m.title,
    description: m.description ?? null,
    sizeBytes: m.size_bytes ?? null,
    updatedISO: m.updated_at,
    ...links,
  };
}

// Sections arrive in page order; a heading goes where its first section is.
function toGroups(sections: SectionOut[]): PrepGroup[] {
  const groups: PrepGroup[] = [];
  for (const s of sections) {
    if (!s || typeof s.slug !== "string" || typeof s.title !== "string" || typeof s.group !== "string") continue;
    let group = groups.find((g) => g.title === s.group);
    if (!group) groups.push((group = { title: s.group, sections: [] }));
    group.sections.push({
      slug: s.slug,
      title: s.title,
      description: s.description ?? null,
      materials: (Array.isArray(s.materials) ? s.materials : []).map(toMaterial).filter((m): m is PrepMaterial => m !== null),
    });
  }
  return groups;
}

// The tests the page listed before the app managed it, with no material.
function fallbackGroups(): PrepGroup[] {
  return PREP_TEST_GROUPS.map((g) => ({
    title: g.title,
    sections: g.tests.map((t) => ({ slug: t.slug, title: t.name, description: t.d, materials: [] })),
  }));
}

// When the API is down or errors: during `next build` (and in dev) this gives
// the built-in list of tests with no material, so the page still builds. On a
// production refresh it throws instead, so Next keeps serving the last good
// page rather than dropping every PDF for the next hour.
export async function getPrepGroups(): Promise<PrepGroup[]> {
  try {
    const res = await fetch(`${API_URL}/prep`, { next: { revalidate: PREP_REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`GET /prep responded ${res.status}`);
    const data: unknown = await res.json();
    if (!Array.isArray(data)) throw new Error("GET /prep did not return a list");
    return toGroups(data);
  } catch (error) {
    const building = process.env.NEXT_PHASE === "phase-production-build";
    if (process.env.NODE_ENV === "production" && !building) throw error;
    console.error("Failed to load preparation material:", error);
    return fallbackGroups();
  }
}
