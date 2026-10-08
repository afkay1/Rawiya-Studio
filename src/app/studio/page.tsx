import type { Metadata } from "next";
import { AboutHero, How, Stories, Values } from "@/components/StudioSections";
import { CtaBlock } from "@/components/HomeSections";

export const metadata: Metadata = { title: "Studio", description: "Rawiya Studio is a Riyadh architecture and interior practice shaping homes with light, proportion and honest materials." };

export default function Page() {
  return (
    <>
      <AboutHero />
      <Stories />
      <How />
      <Values />
      <CtaBlock />
    </>
  );
}
