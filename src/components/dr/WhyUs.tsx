import { Search, Wrench, MessageCircle, Receipt, Zap, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const REASONS = [
  { icon: Search, title: "Proper Diagnosis", text: "We focus on identifying the actual cause rather than randomly replacing components." },
  { icon: Wrench, title: "Complete Computer Care", text: "Hardware and software problems are handled under one roof." },
  { icon: MessageCircle, title: "Direct Communication", text: "Talk directly with us through WhatsApp." },
  { icon: Receipt, title: "Transparent Service", text: "We explain the problem and required work clearly before proceeding." },
  { icon: Zap, title: "Performance Focused", text: "We don't just fix problems — we optimize systems where possible." },
  { icon: Handshake, title: "Personal Service", text: "We're a customer-focused local business, not an anonymous service center." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="border-y border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Second opinion" title="Why Choose Dr. Computer?" />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 60}>
              <div className="ease-brand h-full rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <r.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
