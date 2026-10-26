import { useState } from "react";
import { Droplets, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TunnelProgress } from "./TunnelProgress";

const links = [
  { label: "Packages", href: "#menu" },
  { label: "Membership", href: "#membership" },
  { label: "Machines", href: "#machines" },
  { label: "Detailing", href: "#detail" },
  { label: "Results", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Aqua Lux — home">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-foam-cyan text-primary-foreground">
            <Droplets className="h-5 w-5" />
          </span>
          <span
            className="font-display text-lg font-extrabold uppercase tracking-tight"
            style={{ fontStretch: "125%" }}
          >
            Aqua Lux
          </span>
        </a>
        <nav aria-label="Primary" className="hidden gap-7 lg:flex">
          {links.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden font-semibold md:inline-flex">
            <a href="#contact">Book a wash</a>
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="space-y-1 border-t border-border/50 px-6 py-3 lg:hidden">
          {[...links, { label: "Book a wash", href: "#contact" }].map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-md py-2.5 text-base text-foreground/90 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
      <TunnelProgress />
    </header>
  );
}
