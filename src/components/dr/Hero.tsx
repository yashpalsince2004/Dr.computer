import { ArrowDown, Cpu, HardDrive, MemoryStick, ShieldCheck, Stethoscope, Check, TriangleAlert, Award, CalendarClock } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Reveal } from "./Reveal";
import { WA_MESSAGES } from "@/config/business";

const VITALS = [
  { icon: Cpu, label: "CPU", status: "Healthy", ok: true },
  { icon: MemoryStick, label: "Memory", status: "Optimized", ok: true },
  { icon: HardDrive, label: "Storage", status: "Attention", ok: false },
  { icon: ShieldCheck, label: "Security", status: "Protected", ok: true },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60rem 32rem at 78% -10%, color-mix(in oklab, var(--cyan) 16%, transparent), transparent 70%), radial-gradient(50rem 30rem at 5% 0%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-primary shadow-soft">
              <Stethoscope className="size-3.5" aria-hidden="true" />
              Computer care, diagnosed differently
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-[4.25rem]">
              Your Computer&apos;s
              <span className="block text-primary">Doctor.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hardware problem? Software issue? Slow computer? Virus? We diagnose the problem, fix
              it, and get your system back to health.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton
                message={WA_MESSAGES.hero}
                className="px-7 py-4 text-base"
                label="WhatsApp the Doctor about a computer problem"
              >
                WhatsApp the Doctor
              </WhatsAppButton>
              <a
                href="#services"
                className="ease-brand inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Services
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-soft">
                <Award className="size-3.5 text-primary" aria-hidden="true" />
                Certified Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-soft">
                <CalendarClock className="size-3.5 text-primary" aria-hidden="true" />
                10+ Years Experience
              </span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Laptop Repair • Computer Repair • Maintenance • Upgrades • PC Assembly
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
              <span
                aria-hidden="true"
                className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--cyan) 22%, transparent), transparent)",
                }}
              />
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  System Health
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary">
                  Scanning
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {VITALS.map((v) => (
                  <li
                    key={v.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <v.icon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span className="truncate text-sm font-semibold text-foreground">{v.label}</span>
                    </span>
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 text-xs font-bold ${
                        v.ok ? "text-vital" : "text-warn"
                      }`}
                    >
                      {v.ok ? (
                        <Check className="size-3.5" aria-hidden="true" />
                      ) : (
                        <TriangleAlert className="size-3.5" aria-hidden="true" />
                      )}
                      {v.status}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-ink px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-bold text-ink-foreground">Diagnosis Complete</p>
                  <span className="relative grid size-2.5 place-items-center">
                    <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden="true" />
                    <span className="size-2.5 rounded-full bg-vital" />
                  </span>
                </div>
                <svg viewBox="0 0 300 40" className="mt-3 h-8 w-full" aria-hidden="true">
                  <path
                    className="ecg-path"
                    d="M0 20 H70 l8 -14 l10 28 l9 -14 H150 l8 -10 l9 20 l8 -10 H300"
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="float-soft absolute -left-5 -bottom-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:block">
              <p className="text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
                Uptime restored
              </p>
              <p className="text-lg font-extrabold text-vital">100%</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
