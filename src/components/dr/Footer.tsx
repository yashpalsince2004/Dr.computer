import { Logo } from "./Logo";
import { whatsappLink, WA_MESSAGES } from "@/config/business";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

const CATEGORIES = [
  "Laptop Repair",
  "Computer Repair",
  "Maintenance",
  "Software Support",
  "Antivirus",
  "Upgrades",
  "PC Assembly",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-2 text-sm text-ink-muted">Your Computer's Doctor.</p>
            <a
              href="https://yashpal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-cyan/80"
            >
              yashpal.me
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Explore</h2>
            <ul className="mt-4 space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                  aria-label="Message Dr. Computer on WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">Services</h2>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {CATEGORIES.map((c) => (
                <li key={c} className="text-sm text-ink-muted">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-ink-foreground/10 pt-6 text-xs text-ink-muted">
          © 2026 Dr. Computer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
