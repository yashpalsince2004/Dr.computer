import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const STEPS = [
  { n: "01", title: "Tell Us", text: "Tell us what's wrong with your laptop or computer." },
  { n: "02", title: "Diagnose", text: "We identify the actual cause of the problem." },
  { n: "03", title: "Cure", text: "We repair, maintain, clean, upgrade or configure your system." },
  { n: "04", title: "Back to Work", text: "Your computer is tested and returned ready to use." },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="The visit"
          title="How Dr. Computer Works"
          subtitle="Four simple steps from symptom to recovery."
        />

        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-border sm:block lg:left-0 lg:top-8 lg:h-px lg:w-full"
          />
          <ol className="grid gap-6 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 120}>
                <div className="relative rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="absolute -top-4 left-7 grid size-9 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
