import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CtaBlock, FaqBlock } from "@/components/HomeSections";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "FAQ", description: "Answers about how Rawiya Studio works, our fees and timelines." };

export default function Page() {
  return (
    <>
      <PageHero label={l("(FAQ)", "(أسئلة)")} title={l("FAQ", "الأسئلة الشائعة")} />
      <div className="bg-white pt-24" />
      <FaqBlock full />
      <CtaBlock />
    </>
  );
}
