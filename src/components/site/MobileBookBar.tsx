import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nameFor, priceLabel, type Selection } from "./selection";

/** Phone-only bar that keeps the current pick and a Book button in reach. Hides over the booking form. */
export function MobileBookBar({ selection }: { selection: Selection }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : ""
      }`}
      aria-hidden={hidden}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{nameFor(selection)}</div>
          <div className="font-mono-num text-sm text-foam-cyan">{priceLabel(selection)}</div>
        </div>
        <Button asChild className="shrink-0 font-semibold" tabIndex={hidden ? -1 : undefined}>
          <a href="#contact">
            Book <ArrowRight className="ml-1.5 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
