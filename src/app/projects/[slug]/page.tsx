import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import { PROJECTS } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  return p ? { title: p.title.en, description: p.short.en } : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return <ProjectDetail project={p} />;
}
