import { ArrowRight, Check, Laptop, Wrench, ShieldCheck, AppWindow, Rocket, MonitorCog } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";

const SERVICES = [
  {
    icon: Laptop,
    title: "Laptop & Computer Repair",
    items: [
      "Laptop repair",
      "Desktop repair",
      "Hardware diagnosis",
      "Motherboard troubleshooting",
      "Display problems",
      "Keyboard replacement",
      "Battery & charging issues",
      "Overheating & boot problems",
    ],
  },
  {
    icon: Wrench,
    title: "Computer Maintenance",
    items: [
      "System cleaning",
      "Dust removal",
      "Thermal paste replacement",
      "Performance optimization",
      "Hardware health checks",
      "Preventive maintenance",
      "System diagnostics",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Antivirus & Security",
    items: [
      "Virus removal",
      "Malware removal",
      "Antivirus installation",
      "Security configuration",
      "System protection",
      "Threat diagnosis",
      "Security updates",
    ],
  },
  {
    icon: AppWindow,
    title: "Software Maintenance",
    items: [
      "Windows installation",
      "Software installation",
      "Driver installation",
      "Software troubleshooting",
      "Application errors",
      "System configuration",
      "OS optimization",
    ],
  },
  {
    icon: Rocket,
    title: "Upgrades",
    items: [
      "RAM upgrade",
      "SSD upgrade",
      "HDD replacement",
      "GPU upgrade",
      "Storage expansion",
      "Performance upgrades",
      "Hardware compatibility checks",
    ],
  },
  {
    icon: MonitorCog,
    title: "Custom PC Assembly",
    items: [
      "Gaming PCs",
      "Office PCs",
      "Workstations",
      "AI / ML PCs",
      "Editing PCs",
      "Component selection",
      "Full assembly & testing",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Treatments"
          title="Complete Computer Care."
          subtitle="From a simple software issue to complex hardware problems, we've got you covered."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60}>
              <article className="ease-brand h-full rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <span className="inline-grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-foreground">{s.title}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-vital" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-12 text-center">
            <WhatsAppButton message={WA_MESSAGES.assembly} label="Ask about building or upgrading a PC on WhatsApp">
              Build / Upgrade My PC
              <ArrowRight className="size-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
