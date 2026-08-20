import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },

];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-brand ${
        scrolled
          ? "border-b border-border bg-background/90 shadow-soft"
          : "border-b border-border/40 bg-background/70"
      }`}
      style={{
        WebkitBackdropFilter: "blur(16px)",
        backdropFilter: "blur(16px)",
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--background) 90%, transparent)"
          : "color-mix(in oklab, var(--background) 70%, transparent)",
      }}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between"
      >
        <a href="#home" className="min-w-0 rounded-lg focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton
            message={WA_MESSAGES.general}
            className="hidden px-5 py-2.5 sm:inline-flex"
            label="Message Dr. Computer on WhatsApp"
          >
            WhatsApp Us
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/40 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background/95 lg:hidden"
        style={{
          WebkitBackdropFilter: "blur(16px)",
          backdropFilter: "blur(16px)",
        }}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-3">
            <WhatsAppButton message={WA_MESSAGES.general} className="w-full">
              WhatsApp Us
            </WhatsAppButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
