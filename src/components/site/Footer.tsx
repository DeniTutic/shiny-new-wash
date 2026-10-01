import { Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-foam-cyan text-primary-foreground">
            <Droplets className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span>© {new Date().getFullYear()} Aqua Lux Car Wash. All rights reserved.</span>
        </div>
        <nav aria-label="Footer" className="flex gap-6">
          <a href="#menu" className="hover:text-foreground">
            Packages
          </a>
          <a href="#machines" className="hover:text-foreground">
            Machines
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
