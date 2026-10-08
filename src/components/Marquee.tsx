import { MARQUEE } from "@/lib/content";

export default function Marquee() {
  const list = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee overflow-hidden py-14 md:py-20" dir="ltr" aria-hidden>
      <div className="marquee-track flex gap-4">
        {list.map((src, i) => (
          <div key={i} className="h-[300px] w-[240px] shrink-0 overflow-hidden rounded-[3px] md:h-[560px] md:w-[470px]">
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
