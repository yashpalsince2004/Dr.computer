import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dr/Navbar";
import { Hero } from "@/components/dr/Hero";
import { Problems } from "@/components/dr/Problems";
import { Services } from "@/components/dr/Services";
import { HardwareSoftware } from "@/components/dr/HardwareSoftware";
import { Process } from "@/components/dr/Process";
import { WhyUs } from "@/components/dr/WhyUs";
import { TrustStatement } from "@/components/dr/TrustStatement";
import { Assembly } from "@/components/dr/Assembly";
import { Contact, FinalCta } from "@/components/dr/Contact";
import { Footer } from "@/components/dr/Footer";
import { FloatingWhatsApp } from "@/components/dr/FloatingWhatsApp";
import { Faq } from "@/components/dr/Faq";
import { BUSINESS } from "@/config/business";
import { FAQS } from "@/config/faq";

const TITLE = "Dr. Computer | Laptop & Computer Repair Services";
const DESCRIPTION =
  "Dr. Computer provides laptop repair, computer repair, hardware maintenance, software support, antivirus, upgrades and custom PC assembly.";

const SERVICE_NAMES = [
  "Laptop repair",
  "Desktop computer repair",
  "Computer maintenance",
  "Virus and malware removal",
  "Windows installation",
  "SSD and RAM upgrades",
  "Data backup and recovery support",
  "Custom PC assembly",
];

const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "ComputerRepairService" as const,
  "@id": "#dr-computer",
  name: BUSINESS.name,
  slogan: BUSINESS.tagline,
  description: DESCRIPTION,
  url: "/",
  telephone: `+${BUSINESS.whatsappNumber}`,
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: BUSINESS.city },
  areaServed: { "@type": "City", name: BUSINESS.city },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  knowsAbout: [
    "laptop repair",
    "computer repair",
    "computer maintenance",
    "virus removal",
    "SSD upgrade",
    "RAM upgrade",
    "custom PC assembly",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Computer repair and maintenance services",
    itemListElement: SERVICE_NAMES.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, serviceType: name },
    })),
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(LOCAL_BUSINESS) },
      { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        
        <Hero />
        <Problems />
        <Services />
        <HardwareSoftware />
        <Process />
        <WhyUs />
        <TrustStatement />
        <Assembly />
        <Faq />
        <Contact />

        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
