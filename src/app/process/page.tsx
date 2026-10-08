import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessList from "@/components/ProcessList";
import { CtaBlock } from "@/components/HomeSections";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "Process", description: "How Rawiya Studio takes a project from site consultation to handover." };

export default function Page() {
  return (
    <>
      <PageHero
        label={l("(Our process)", "(آلية عملنا)")}
        title={l("Studio Workflow", "مسار العمل")}
        desc={l("A clear, phased journey with a fixed fee at every stage.", "رحلة واضحة على مراحل بأتعاب ثابتة في كل مرحلة.")}
      />
      <ProcessList />
      <CtaBlock />
    </>
  );
}
