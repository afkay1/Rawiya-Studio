"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { POSTS, UI, type Post } from "@/lib/content";
import Reveal from "./Reveal";

export function BlogGrid() {
  const { t } = useLang();
  return (
    <section className="px-page bg-white py-20 md:py-28">
      <div className="grid gap-x-5 gap-y-16 md:grid-cols-3">
        {POSTS.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <div className="aspect-[4/4.6] overflow-hidden rounded-[3px] bg-card">
              <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            </div>
            <p className="mt-5 text-xl leading-snug">{t(p.title)}</p>
            <p className="mt-2 text-muted">{t(p.excerpt)}</p>
            <p className="mt-3 text-sm text-muted">{t(p.date)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PostView({ post }: { post: Post }) {
  const { t } = useLang();
  const idx = POSTS.findIndex((p) => p.slug === post.slug);
  const next = POSTS[(idx + 1) % POSTS.length];
  return (
    <>
      <section className="px-page bg-white pt-40 md:pt-52">
        <Link href="/blog" className="link-line text-muted">
          <span className="inline-block rtl:-scale-x-100">←</span> {t(UI.backToBlog)}
        </Link>
        <p className="mt-10 text-muted">{t(UI.published)}: {t(post.date)}</p>
        <Reveal as="h1" text={post.title} immediate className="h-xl mt-4 max-w-5xl text-[clamp(2.6rem,7vw,6rem)]" />
        <div className="mt-14 overflow-hidden rounded-[3px]">
          <img src={post.image} alt="" className="aspect-[16/8] w-full object-cover" />
        </div>
        <article className="mx-auto flex max-w-3xl flex-col gap-8 py-20 text-xl leading-relaxed md:py-28 md:text-2xl">
          {post.body.map((b, i) => (
            <p key={i}>{t(b)}</p>
          ))}
        </article>
      </section>
      <Link href={`/blog/${next.slug}`} className="px-page block bg-mist py-16 md:py-24">
        <p className="label">{t(UI.nextArticle)}</p>
        <p className="h-lg mt-4 max-w-4xl text-3xl md:text-6xl">{t(next.title)}</p>
      </Link>
    </>
  );
}
