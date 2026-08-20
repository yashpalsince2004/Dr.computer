import logoImg from "@/assets/logo.png";

export function Logo({
  tone = "dark",
  className = "h-12 w-auto",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const src = typeof logoImg === "string" ? logoImg : logoImg.src;
  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src={src}
        alt="Dr. Computer Logo"
        className={`shrink-0 object-contain ${className}`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate text-[1.35rem] font-extrabold tracking-tight ${
            tone === "light" ? "text-ink-foreground" : "text-foreground"
          }`}
        >
          Dr. Computer
        </span>
        <span
          className={`mt-1 truncate text-[0.8rem] font-medium tracking-wide ${
            tone === "light" ? "text-cyan" : "text-muted-foreground"
          }`}
        >
          By Yash Pal
        </span>
      </span>
    </span>
  );
}

