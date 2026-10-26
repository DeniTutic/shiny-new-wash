import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-wash.jpg";
import { locations } from "@/data/site";

const stats = [
  { n: "120k+", l: "Cars washed" },
  { n: "4.9★", l: "2,400+ reviews" },
  { n: "24/7", l: "Open daily" },
];

const fmtHour = (h: number) => `${h % 12 || 12}${h < 12 ? "am" : "pm"}`;

/** "Westside until 8pm" / "Westside opens 8am", from the visitor's clock. */
function useOpenStatus() {
  // server render shows the always-open site only; hours need the visitor's clock
  const [now, setNow] = useState<Date>();
  useEffect(() => setNow(new Date()), []);
  return locations.map((l) => {
    const name = l.title.split(" ")[0];
    if (!l.hours) return `${name} 24/7`;
    if (!now) return null;
    const [open, close] = l.hours;
    const h = now.getHours();
    return h >= open && h < close
      ? `${name} until ${fmtHour(close)}`
      : `${name} opens ${fmtHour(open)}`;
  });
}

export function Hero() {
  const status = useOpenStatus().filter(Boolean);
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="foam-bubbles pointer-events-none absolute inset-0" />
      <div aria-hidden className="foam-stripe absolute inset-x-0 top-0 h-1" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-2 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono-num text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foam-lemon" aria-hidden />
            <span className="whitespace-nowrap text-foreground">Open now</span>
            {status.map((t, i) => (
              // phones only have room for the first location
              <span key={t} className={i ? "hidden sm:inline" : undefined}>
                <span aria-hidden>· </span>
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-6 text-5xl leading-[0.95] md:text-7xl">
            The cleanest <span className="text-foam-cyan led-glow">5&nbsp;minutes</span> of your
            day.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Premium automated car wash, touchless tunnels, and pro-grade detailing — built around
            the next generation of wash technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 text-base font-semibold"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <a href="#contact">
                Book a wash <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <a href="#menu">See packages</a>
            </Button>
          </div>
          <dl className="mt-10 flex gap-8 border-t border-border/60 pt-6">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-mono-num text-2xl font-bold text-foreground">{s.n}</dd>
                <dd className="text-xs text-muted-foreground" aria-hidden>
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="squeegee-reveal relative">
            <img
              src={heroImg}
              alt="Luxury car being washed at Aqua Lux"
              width={1920}
              height={1280}
              fetchPriority="high"
              className="aspect-[3/2] w-full rounded-xl object-cover"
              style={{ boxShadow: "var(--shadow-card)" }}
            />
            <div
              aria-hidden
              className="foam-stripe absolute inset-x-0 bottom-0 h-1.5 rounded-b-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
