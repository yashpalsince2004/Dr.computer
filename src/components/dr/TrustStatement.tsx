import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";

export function TrustStatement() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50rem 26rem at 50% 0%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight text-ink-foreground sm:text-5xl">
            Your Computer Doesn&apos;t Need Guesswork.
            <span className="mt-2 block text-cyan">It needs a diagnosis.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Whether it&apos;s a hardware failure, software issue, virus, performance problem or
            upgrade — Dr. Computer is here to diagnose and fix it.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              className="px-7 py-4 text-base"
              label="Consult Dr. Computer on WhatsApp"
            >
              Consult Dr. Computer
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
