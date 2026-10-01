import { useEffect, useState } from "react";
import { stages } from "@/data/site";

/** Tracks which tunnel stage (section) is currently under the sticky header. */
function useActiveStage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const els = stages.map((s) => document.getElementById(s.id));
    const visible = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = els.indexOf(e.target as HTMLElement);
          if (i < 0) continue;
          if (e.isIntersecting) visible.add(i);
          else visible.delete(i);
        }
        if (visible.size) setActive(Math.max(...visible));
      },
      // a section counts once it crosses the upper third of the viewport
      { rootMargin: "-120px 0px -60% 0px" },
    );
    els.forEach((el) => el && io.observe(el));
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
