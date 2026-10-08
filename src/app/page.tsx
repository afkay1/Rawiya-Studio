import HeroSlider from "@/components/HeroSlider";
import Marquee from "@/components/Marquee";
import { About, Clients, CtaBlock, FaqBlock, Insight, Philosophy, ProcessBlock, ServicesBlock, Today, Works } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Philosophy />
      <Marquee />
      <Today />
      <About />
      <Works />
      <Clients />
      <ServicesBlock />
      <ProcessBlock />
      <Insight />
      <FaqBlock />
      <CtaBlock />
    </>
  );
}
