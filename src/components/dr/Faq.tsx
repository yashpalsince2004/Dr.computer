import { Plus, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";
import { FAQS } from "@/config/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          subtitle="Straight answers about repairs, timelines, pricing and data safety."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
              <details className="group rounded-2xl border border-border bg-card px-5 py-4 transition-colors duration-300 ease-brand hover:border-primary/40 open:border-primary/40 open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-base font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                  <span>{f.q}</span>
                  <Plus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-primary transition-transform duration-300 ease-brand group-open:rotate-45"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Still unsure what's wrong with your computer?
          </p>
          <div className="mt-4 flex justify-center">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              label="Ask your question on WhatsApp"
            >
              Ask on WhatsApp
              <ArrowRight className="size-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
