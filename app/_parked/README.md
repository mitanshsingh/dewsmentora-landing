# Parked pages

The underscore makes `_parked` a Next.js private folder, so nothing in here is
routed: these pages 404 and are not in the sitemap or navigation.

| Folder          | Former URL                                   | Data                       |
| --------------- | -------------------------------------------- | -------------------------- |
| `study-abroad/` | `/study-abroad`, `/study-abroad/[country]`   | `lib/study-destinations.ts` |
| `for-students/` | `/for-students`                              | —                          |

To bring one back:

1. `git mv app/_parked/<folder> app/<folder>`
2. Re-add it to `app/sitemap.ts` (Study Abroad also needs its `COUNTRIES` entries).
3. Re-add the nav links in `components/Header.tsx`, `PHONE_NAV_LINKS` in
   `lib/site-content.ts`, and `components/Footer.tsx`.
