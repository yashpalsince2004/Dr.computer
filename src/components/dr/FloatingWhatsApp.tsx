import { whatsappLink, WA_MESSAGES } from "@/config/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      <a
        href={whatsappLink(WA_MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Computer on WhatsApp"
        className="group relative grid size-14 place-items-center rounded-full bg-vital text-ink-foreground shadow-lift transition-transform duration-300 ease-brand hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="pulse-ring absolute inset-0 -z-10 rounded-full" aria-hidden="true" />
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] hidden whitespace-nowrap rounded-full bg-ink px-3 py-2 text-xs font-semibold text-ink-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat with Dr. Computer
        </span>
      </a>
    </div>
  );
}
