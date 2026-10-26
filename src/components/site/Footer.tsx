import { Droplets, MapPin } from "lucide-react";
import { directionsUrl, locations, photoCredits } from "@/data/site";

const links = [
  { label: "Packages", href: "#menu" },
  { label: "Membership", href: "#membership" },
  { label: "Machines", href: "#machines" },
  { label: "Detailing", href: "#detail" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a wash", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background pb-24 pt-16 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2.5" aria-label="Aqua Lux — home">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-foam-cyan text-primary-foreground">
              <Droplets className="h-4 w-4" aria-hidden />
            </span>
            <span
              className="font-display text-base font-extrabold uppercase tracking-tight"
              style={{ fontStretch: "125%" }}
            >
              Aqua Lux
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium tunnel and touchless washes, ceramic coatings and full detailing.
          </p>
          <div className="mt-4 space-y-1 font-mono-num text-sm">
            <a href="tel:+15550109274" className="block hover:text-foam-cyan">
              (555) 010-WASH
            </a>
            <a href="mailto:hello@aqualux.co" className="block hover:text-foam-cyan">
              hello@aqualux.co
            </a>
          </div>
        </div>

        {locations.map((l) => (
          <div key={l.id}>
            <h3 className="text-sm">{l.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{l.address}</p>
            <p className="font-mono-num text-sm text-foreground/90">{l.hoursLabel}</p>
            <a
              href={directionsUrl(l.address)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-foam-cyan hover:underline"
            >
              <MapPin className="h-4 w-4" aria-hidden /> Get directions
            </a>
          </div>
        ))}

        <nav aria-label="Footer">
          <h3 className="text-sm">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {links.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-border/60 px-6 pt-6 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Aqua Lux Car Wash. All rights reserved.</p>
        <p className="mt-2">
          Photos on{" "}
          <a href="https://unsplash.com" className="underline-offset-2 hover:underline">
            Unsplash
          </a>{" "}
          by{" "}
          {photoCredits.map((c, i) => (
            <span key={c.url}>
              {i > 0 && ", "}
              <a href={c.url} className="underline-offset-2 hover:underline">
                {c.name}
              </a>
            </span>
          ))}
          .
        </p>
      </div>
    </footer>
  );
}
