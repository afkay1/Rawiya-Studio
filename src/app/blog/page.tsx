import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { BlogGrid } from "@/components/BlogViews";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "Insight", description: "Articles on spatial design, materials and light from Rawiya Studio." };

export default function Page() {
  return (
    <>
      <PageHero
        label={l("(Insight)", "(مقالات)")}
        title={l("Studio Insight", "رؤى الاستوديو")}
        desc={l("Notes on spatial design, materials and light.", "ملاحظات حول التصميم المكاني والمواد والضوء.")}
      />
      <BlogGrid />
    </>
  );
}
