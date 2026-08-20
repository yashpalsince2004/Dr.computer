import { Wrench, Laptop } from "lucide-react";
import { Reveal } from "./Reveal";

const HARDWARE = ["Laptop repair", "Desktop repair", "Components", "RAM", "SSD", "HDD", "GPU", "Power issues", "Cooling", "Display", "Motherboard"];
const SOFTWARE = ["Windows", "Drivers", "Applications", "Antivirus", "Malware", "Optimization", "Updates", "Configuration", "Troubleshooting"];

function Chips({ items, tone }: { items: string[]; tone: "cyan" | "vital" }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium text-ink-foreground ${
            tone === "cyan" ? "border-cyan/40 bg-cyan/10" : "border-vital/40 bg-vital/10"
          }`}
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export function HardwareSoftware() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(45rem 25rem at 15% 0%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 70%), radial-gradient(45rem 25rem at 85% 100%, color-mix(in oklab, var(--vital) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">Full spectrum care</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink-foreground sm:text-4xl">Hardware or Software?</h2>
          <p className="mt-2 text-4xl font-extrabold text-cyan sm:text-6xl">We Handle Both.</p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-extrabold text-ink-foreground"><Wrench className="mr-2 inline size-5 align-[-3px] text-cyan" aria-hidden="true" />Hardware</h3>
              <Chips items={HARDWARE} tone="cyan" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-extrabold text-ink-foreground"><Laptop className="mr-2 inline size-5 align-[-3px] text-vital" aria-hidden="true" />Software</h3>
              <Chips items={SOFTWARE} tone="vital" />
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="mt-12 text-center text-2xl font-extrabold text-ink-foreground sm:text-3xl">
            One Doctor. Every Computer Problem.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
