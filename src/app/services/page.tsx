import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaBlock, FaqBlock, ServicesBlock } from "@/components/HomeSections";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "Services", description: "Architectural planning, spatial curation, bespoke interiors and environmental design in Riyadh." };

export default function Page() {
  return (
    <>
      <PageHero
        label={l("(Our services)", "(خدماتنا)")}
        title={l("Services", "الخدمات")}
        desc={l("Four disciplines, one studio, from first sketch to final handover.", "أربعة تخصصات في استوديو واحد، من أول رسم حتى التسليم.")}
      />
      <div className="bg-white pt-24" />
      <ServicesBlock />
      <FaqBlock />
      <CtaBlock />
    </>
  );
}
