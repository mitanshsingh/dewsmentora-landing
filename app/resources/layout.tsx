import type { ReactNode } from "react";
import ResourceTabs from "@/components/ui/ResourceTabs";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ResourceTabs />
      {children}
    </>
  );
}
