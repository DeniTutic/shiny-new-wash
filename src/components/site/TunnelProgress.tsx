import { useEffect, useState } from "react";
import { stages } from "@/data/site";

/** Tracks which tunnel stage (section) is currently under the sticky header. */
function useActiveStage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    // section element -> stage index
    const stageOf = new Map<Element, number>();
    stages.forEach((s, i) =>
      [s.id, ...(s.covers ?? [])].forEach((id) => {
        const el = document.getElementById(id);
        if (el) stageOf.set(el, i);
      }),
    );
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        if (visible.size) setActive(Math.max(...[...visible].map((el) => stageOf.get(el)!)));
      },
      // a section counts once it crosses the upper third of the viewport
      { rootMargin: "-120px 0px -60% 0px" },
    );
    stageOf.forEach((_, el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function TunnelProgress() {
  const active = useActiveStage();
  return (
    <nav aria-label="Wash tunnel — page sections" className="border-t border-border/50">
      <ol className="mx-auto flex max-w-7xl items-stretch px-2 sm:px-6">
        {stages.map((s, i) => {
          const done = i < active;
          const current = i === active;
          return (
            <li key={s.id} className="relative flex-1">
              <a
                href={`#${s.id}`}
                aria-current={current ? "location" : undefined}
                title={`${s.label} · ${s.section}`}
                className={`flex flex-col items-center gap-1 px-1 py-2 font-mono-num text-[10px] uppercase tracking-widest transition-colors sm:flex-row sm:justify-center sm:gap-2 sm:text-xs ${
                  current
                    ? "text-foam-cyan led-glow"
                    : done
                      ? "text-foreground/80"
                      : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span aria-hidden className="hidden sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s.label}</span>
                <span className="sr-only"> — {s.section}</span>
              </a>
              <span
                aria-hidden
                className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full transition-colors duration-500 ${
                  current ? "bg-foam-cyan" : done ? "bg-foam-magenta/70" : "bg-border"
                }`}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
