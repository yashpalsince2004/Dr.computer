import type { ReactNode } from "react";
import { whatsappLink } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Variant = "primary" | "ghost" | "light" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-brand min-h-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  dark: "bg-ink text-ink-foreground hover:bg-ink/90",
  light: "bg-card text-foreground border border-border hover:border-primary/40",
  ghost:
    "bg-transparent text-foreground border border-border hover:border-primary/40 hover:text-primary",
};

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  label,
  icon = true,
}: {
  message?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  label?: string;
  icon?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? "Chat with Dr. Computer on WhatsApp"}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon ? <WhatsAppIcon className="size-4 shrink-0" /> : null}
      {children}
    </a>
  );
}
