import { ArrowRight, Gamepad2, BrainCircuit, Clapperboard, Building2, Code2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";

const BUILDS = [
  { icon: Gamepad2, title: "Gaming", text: "High-performance gaming builds." },
  { icon: BrainCircuit, title: "AI / ML", text: "Machines designed for development and AI workloads." },
  { icon: Clapperboard, title: "Editing", text: "Video editing and creative workstations." },
  { icon: Building2, title: "Office", text: "Reliable business and productivity systems." },
  { icon: Code2, title: "Development", text: "Developer-focused configurations." },
];

export function Assembly() {
  return (
    <section id="assembly" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Prescription build"
          title="Need a New Computer?"
          subtitle="Don't buy a computer. Build the right computer."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {BUILDS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 60}>
              <div className="ease-brand h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <b.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 text-center">
            <WhatsAppButton message={WA_MESSAGES.assembly} label="Build my custom PC — chat on WhatsApp">
              Build My PC
              <ArrowRight className="size-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
