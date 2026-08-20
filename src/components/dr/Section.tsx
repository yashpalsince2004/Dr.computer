import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-cyan" : "text-primary"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          dark ? "text-ink-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
