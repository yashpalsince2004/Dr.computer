import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { WhatsAppButton } from "./WhatsAppButton";
import { WA_MESSAGES } from "@/config/business";
import slowImg from "@/assets/problem-slow.jpg";
import slow480 from "@/assets/problem-slow-480.webp";
import slow768 from "@/assets/problem-slow-768.webp";
import virusImg from "@/assets/problem-virus.jpg";
import virus480 from "@/assets/problem-virus-480.webp";
import virus768 from "@/assets/problem-virus-768.webp";
import bootImg from "@/assets/problem-boot.jpg";
import boot480 from "@/assets/problem-boot-480.webp";
import boot768 from "@/assets/problem-boot-768.webp";
import powerImg from "@/assets/problem-power.jpg";
import power480 from "@/assets/problem-power-480.webp";
import power768 from "@/assets/problem-power-768.webp";
import softwareImg from "@/assets/problem-software.jpg";
import software480 from "@/assets/problem-software-480.webp";
import software768 from "@/assets/problem-software-768.webp";
import storageImg from "@/assets/problem-storage.jpg";
import storage480 from "@/assets/problem-storage-480.webp";
import storage768 from "@/assets/problem-storage-768.webp";
import displayImg from "@/assets/problem-display.jpg";
import display480 from "@/assets/problem-display-480.webp";
import display768 from "@/assets/problem-display-768.webp";
import hardwareImg from "@/assets/problem-hardware.jpg";
import hardware480 from "@/assets/problem-hardware-480.webp";
import hardware768 from "@/assets/problem-hardware-768.webp";

const srcset = (a: string, b: string) => `${a} 480w, ${b} 768w`;
const SIZES = "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw";

const PROBLEMS = [
  {
    img: slowImg,
    webp: srcset(slow480, slow768),
    alt: "Frustrated person waiting at a laptop that shows a stalled loading spinner on screen",
    title: "Computer Running Slow",
    text: "We identify performance bottlenecks and optimize your system.",
  },
  {
    img: virusImg,
    webp: srcset(virus480, virus768),
    alt: "Laptop screen displaying a red antivirus alert warning about detected malware",
    title: "Virus or Malware",
    text: "We remove threats and help protect your computer.",
  },
  {
    img: bootImg,
    webp: srcset(boot480, boot768),
    alt: "Open laptop with a completely blank black screen that fails to boot up",
    title: "Computer Not Starting",
    text: "We diagnose hardware and software startup problems.",
  },
  {
    img: powerImg,
    webp: srcset(power480, power768),
    alt: "Close-up of a laptop charging port with the power adapter cable plugged in",
    title: "Charging / Power Problems",
    text: "We identify power, battery, adapter and hardware issues.",
  },
  {
    img: softwareImg,
    webp: srcset(software480, software768),
    alt: "Laptop showing an operating system error dialog box over the desktop",
    title: "Software Problems",
    text: "Installation, errors, compatibility issues and troubleshooting.",
  },
  {
    img: storageImg,
    webp: srcset(storage480, storage768),
    alt: "An SSD and a mechanical hard disk drive laid out on a workbench beside an open laptop",
    title: "Storage Problems",
    text: "SSD/HDD upgrades, storage optimization and related troubleshooting.",
  },
  {
    img: displayImg,
    webp: srcset(display480, display768),
    alt: "Laptop with a cracked screen showing distorted, glitching colour bands",
    title: "Display Problems",
    text: "Screen, graphics, display and connection-related problems.",
  },
  {
    img: hardwareImg,
    webp: srcset(hardware480, hardware768),
    alt: "Technician using a precision screwdriver to repair components on a laptop motherboard",
    title: "Hardware Failure",
    text: "We diagnose and repair hardware-related problems.",
  },
];


export function Problems() {
  return (
    <section id="problems" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Symptoms"
          title="Something Wrong With Your Computer?"
          subtitle="Don't worry. You don't need to know what's wrong. That's our job."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50}>
              <div className="ease-brand group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <div className="aspect-[3/2] overflow-hidden bg-secondary">
                  <picture>
                    <source type="image/webp" srcSet={p.webp} sizes={SIZES} />
                    <img
                      src={p.img}
                      alt={p.alt}
                      width={768}
                      height={512}
                      sizes={SIZES}
                      loading="lazy"
                      decoding="async"
                      className="ease-brand size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-base font-semibold text-foreground">Don&apos;t see your problem?</p>
            <WhatsAppButton
              message={WA_MESSAGES.general}
              variant="dark"
              label="Ask Dr. Computer about your problem on WhatsApp"
            >
              Ask Dr. Computer
              <ArrowRight className="size-4" aria-hidden="true" />
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
