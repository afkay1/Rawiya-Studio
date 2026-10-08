import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { l } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Start a project with Rawiya Studio in Riyadh." };

export default function Page() {
  return (
    <>
      <PageHero
        label={l("(Get started)", "(ابدأ الآن)")}
        title={l("Start the journey", "لنبدأ الرحلة")}
        desc={l("Tell us about your site and your ambitions. We reply within two working days.", "حدثنا عن موقعك وطموحك. نرد خلال يومي عمل.")}
      />
      <section className="px-page bg-white py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
