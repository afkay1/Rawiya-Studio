import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostView } from "@/components/BlogViews";
import { POSTS } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = POSTS.find((x) => x.slug === params.slug);
  return p ? { title: p.title.en, description: p.excerpt.en } : {};
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = POSTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return <PostView post={p} />;
}
