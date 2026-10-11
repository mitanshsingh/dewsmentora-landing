"use client";

import { useEffect } from "react";

/**
 * Opens the `<details>` that the URL fragment names, so a link to
 * /how-it-works#identity-mapping lands on that Map already expanded. Browsers
 * leave a targeted `<details>` shut. It also jumps there instantly, so a shared
 * link or new tab lands on the Map rather than gliding down from the top under
 * the site's `scroll-behavior: smooth`.
 */
export default function OpenDetailsOnHash() {
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (!(target instanceof HTMLDetailsElement)) return;
      target.open = true;
      target.scrollIntoView({ block: "start", behavior: "instant" });
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return null;
}
