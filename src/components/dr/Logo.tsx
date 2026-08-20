export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span
        className={`grid size-9 shrink-0 place-items-center rounded-xl ${
          tone === "dark" ? "bg-ink text-ink-foreground" : "bg-primary text-primary-foreground"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2.5" y="4" width="19" height="12.5" rx="2.2" />
          <path d="M1.5 20h21" strokeLinecap="round" />
          <path d="M12 7.6v5.4M9.3 10.3h5.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate text-[1.05rem] font-extrabold tracking-tight">Dr. Computer</span>
        <span className="mt-0.5 truncate text-[0.65rem] font-medium tracking-wide text-muted-foreground">
          By Yash Pal
        </span>
      </span>
    </span>
  );
}
