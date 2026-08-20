import logoImg from "@/assets/logo.png";

export function Logo({
  className = "h-9 w-auto",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const src = typeof logoImg === "string" ? logoImg : logoImg.src;
  return (
    <img
      src={src}
      alt="Dr. Computer Logo"
      className={`object-contain ${className}`}
    />
  );
}

