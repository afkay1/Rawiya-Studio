import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { CtaBlock } from "@/components/HomeSections";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "Projects", description: "Selected architecture and interior projects by Rawiya Studio." };

export default function Page() {
  return (
    <>
      <PageHero
        label={l("(Our work)", "(أعمالنا)")}
        title={l("Projects", "المشاريع")}
        desc={l("Villas, pavilions and headquarters shaped by light, material and place.", "فلل وأجنحة ومقرات صاغها الضوء والمادة والمكان.")}
      />
      <ProjectsGrid />
      <CtaBlock />
    </>
  );
}
