import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";
import { BUSINESS, WA_MESSAGES, whatsappLink } from "@/config/business";

export function Contact() {
  const cards = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: BUSINESS.phoneDisplay,
      href: whatsappLink(WA_MESSAGES.general),
    },
    {
      icon: Phone,
      label: "Phone",
      value: BUSINESS.phoneDisplay,
      href: `tel:+${BUSINESS.whatsappNumber}`,
    },
    { icon: MapPin, label: "Service Area", value: BUSINESS.serviceArea },
    { icon: Clock, label: "Business Hours", value: BUSINESS.hours },
  ];

  return (
    <section id="contact" className="border-t border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Book a consultation"
          title="Need a Computer Doctor?"
          subtitle="Tell us what's wrong. We'll help you figure out what to do next."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.label} delay={i * 60}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift"
                >
                  <c.icon className="size-5 text-primary" aria-hidden="true" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{c.value}</p>
                </a>
              ) : (
                <div className="h-full rounded-3xl border border-border bg-background p-6">
                  <c.icon className="size-5 text-primary" aria-hidden="true" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{c.value}</p>
                </div>
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 text-center">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              className="px-7 py-4 text-base"
              label="WhatsApp Dr. Computer now"
            >
              WhatsApp Dr. Computer
            </WhatsAppButton>
            <p className="mt-4 text-sm text-muted-foreground">
              No long forms. Just message us and describe the problem in your own words.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Is Your Computer Feeling Sick?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Don&apos;t guess the problem. Let Dr. Computer diagnose it.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-8">
            <WhatsAppButton
              message={WA_MESSAGES.hero}
              variant="dark"
              className="px-7 py-4 text-base"
              label="Talk to Dr. Computer on WhatsApp"
            >
              Talk to Dr. Computer
            </WhatsAppButton>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 text-xs text-muted-foreground">
            Hardware or software — every computer problem deserves the right diagnosis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
