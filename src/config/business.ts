export const BUSINESS = {
  name: "Dr. Computer",
  owner: "Yash Pal",
  tagline: "Your Computer's Doctor.",
  whatsappNumber: "919326259927", // digits only, with country code
  phoneDisplay: "+91 93262 59927",
  serviceArea: "Kalyan-Dombivli • Pickup & drop • On-site and remote support",
  hours: "Mon – Fri · 10:00 AM – 8:00 PM",
  city: "Kalyan-Dombivli",
} as const;

export const WA_MESSAGES = {
  hero: "Hello Dr. Computer, I need help with my computer. Can you help me diagnose the problem?",
  general:
    "Hello Dr. Computer, I have a computer-related problem and would like to discuss it.",
  laptop: "Hello Dr. Computer, I need laptop repair. My problem is: ",
  computer: "Hello Dr. Computer, I need computer repair. My problem is: ",
  assembly:
    "Hello Dr. Computer, I want to build a custom PC. Please help me with the configuration.",
} as const;

export function whatsappLink(message: string = WA_MESSAGES.general) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
