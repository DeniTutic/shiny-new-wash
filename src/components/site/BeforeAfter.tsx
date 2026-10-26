import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { beforeAfter } from "@/data/site";

/** Drag (or arrow-key) the divider to wipe between the dirty and clean shot. */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const { before, after } = beforeAfter;
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-border bg-white"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img
        src={after.src}
        alt={after.alt}
        loading="lazy"
        width={1200}
        height={800}
        className="aspect-[3/2] w-full object-cover"
      />
      <img
        src={before.src}
        alt={before.alt}
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <span className="absolute left-4 top-4 rounded bg-background/80 px-2.5 py-1 font-mono-num text-xs uppercase tracking-widest backdrop-blur">
        {before.label}
      </span>
      <span className="absolute right-4 top-4 rounded bg-foam-cyan px-2.5 py-1 font-mono-num text-xs font-bold uppercase tracking-widest text-primary-foreground">
        {after.label}
      </span>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-foam-cyan"
        style={{ left: `${pos}%`, boxShadow: "var(--shadow-glow)" }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        onKeyDown={(e) => {
          // native step is 1%, which is too slow from the keyboard
          const d = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 }[e.key];
          if (d === undefined) return;
          e.preventDefault();
          setPos((p) => Math.min(100, Math.max(0, p + d)));
        }}
        aria-label={`${before.label} and ${after.label} comparison`}
        aria-valuetext={`${100 - pos}% ${after.label.toLowerCase()}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-foam-cyan bg-background text-foam-cyan peer-focus-visible:ring-4 peer-focus-visible:ring-foam-cyan/50"
        style={{ left: `${pos}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" />
      </div>
    </div>
  );
}
