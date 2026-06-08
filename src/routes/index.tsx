import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Droplets, Sparkles, Shield, Clock, Zap, Wind, Car, Star,
  CheckCircle2, MapPin, Phone, Mail, ArrowRight, Gauge, Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImg from "@/assets/hero-wash.jpg";
import tunnelImg from "@/assets/machine-tunnel.jpg";
import touchlessImg from "@/assets/machine-touchless.jpg";
import deepCleanImg from "@/assets/deep-clean.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aqua Lux — Premium Car Wash & Detailing" },
      { name: "description", content: "Modern automated car wash with new tunnel & touchless machines, deep interior cleaning, ceramic coating and detailing." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Machines", href: "#machines" },
  { label: "Deep Clean", href: "#detail" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Droplets, title: "Express Wash", price: "$12", time: "5 min", desc: "Foam, rinse, dry. In and out in minutes.", features: ["Triple foam", "Spot-free rinse", "Power dry"] },
  { icon: Sparkles, title: "Premium Shine", price: "$24", time: "12 min", desc: "Wash plus wax and tire shine for a showroom finish.", features: ["Hot carnauba wax", "Tire & rim cleaner", "Underbody rinse", "Rain repellent"] },
  { icon: Shield, title: "Ceramic Shield", price: "$59", time: "20 min", desc: "9H ceramic coating for months of glass-like protection.", features: ["9H ceramic spray", "UV & contaminant guard", "12-month durability", "Hydrophobic finish"] },
  { icon: Car, title: "Full Detail", price: "$149", time: "2 hrs", desc: "Inside and out, restored to better-than-new.", features: ["Clay bar treatment", "Leather conditioning", "Steam sanitization", "Engine bay clean"] },
];

const machines = [
  { img: tunnelImg, name: "AquaTunnel Pro X9", tag: "New 2026", desc: "Soft-touch foam brush tunnel with AI-guided pressure control. Safe on every paint finish, ceramic-coat friendly.", specs: ["72 ft tunnel", "Recycled water", "AI paint scan", "Triple-foam arch"] },
  { img: touchlessImg, name: "JetCloud Touchless", tag: "Flagship", desc: "1,200 PSI touchless wash for sensitive finishes, wraps and lifted trucks. Zero bristle contact.", specs: ["1,200 PSI", "pH-balanced soap", "Auto profile scan", "Eco rinse cycle"] },
];

const features = [
  { icon: Zap, title: "Open 24/7", desc: "Self-serve bays available around the clock." },
  { icon: Leaf, title: "Eco-Conscious", desc: "Reclaimed water, biodegradable soaps." },
  { icon: Gauge, title: "Under 5 Minutes", desc: "Drive-through tunnels keep lines moving." },
  { icon: Wind, title: "Touch-Free Dry", desc: "High-velocity dryers, zero water spots." },
];

const galleryImgs = [gallery1, gallery2, gallery3, deepCleanImg, tunnelImg, touchlessImg];

const testimonials = [
  { name: "Marcus T.", car: "Tesla Model S", text: "The ceramic coat is unreal. Water just slides off — best car wash I've ever used." },
  { name: "Priya S.", car: "Range Rover", text: "Deep interior clean made my 5-year-old SUV smell brand new. Worth every penny." },
  { name: "Diego R.", car: "Ford F-150", text: "Touchless bay handled my lifted truck no problem. Quick, careful, spotless." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <FeatureStrip />
      <Services />
      <Machines />
      <DeepClean />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-hero)" }}>
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Aqua Lux</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex" style={{ background: "var(--gradient-hero)", color: "var(--primary-foreground)" }}>
            <a href="#contact">Book a wash</a>
          </Button>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
            <span className="block h-0.5 w-6 bg-foreground mb-1.5" />
            <span className="block h-0.5 w-6 bg-foreground mb-1.5" />
            <span className="block h-0.5 w-6 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 space-y-3">
          {nav.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-2 lg:pt-24">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            New 2026 machines now live
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            The cleanest <span className="text-gradient">5 minutes</span> of your day.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Premium automated car wash, touchless tunnels, and pro-grade detailing.
            Built around the next generation of wash technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 px-6 text-base" style={{ background: "var(--gradient-hero)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}>
              <a href="#services">See plans <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
              <a href="#machines">Our machines</a>
            </Button>
          </div>
          <div className="mt-10 flex gap-8 border-t border-border/50 pt-6">
            <Stat n="120k+" l="Cars washed" />
            <Stat n="4.9★" l="2,400+ reviews" />
            <Stat n="24/7" l="Open daily" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-50 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
          <img src={heroImg} alt="Luxury car being washed at Aqua Lux" width={1920} height={1280} className="relative rounded-2xl object-cover shadow-2xl" style={{ boxShadow: "var(--shadow-card)" }} />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}

function FeatureStrip() {
  return (
    <section className="border-y border-border/50 bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(f => (
          <div key={f.title} className="flex items-start gap-4 bg-background p-8">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{tag}</span>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead tag="Services" title="Pick your wash" sub="From a quick rinse to full concours-level detail. All cars, all sizes, all welcome." />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Card key={s.title} className="group relative flex flex-col gap-5 border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50">
            {i === 2 && (
              <span className="absolute -top-3 right-6 rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>Popular</span>
            )}
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold">{s.price}</span>
              <span className="text-xs text-muted-foreground">· {s.time}</span>
            </div>
            <ul className="space-y-2 border-t border-border/50 pt-4 text-sm">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Machines() {
  return (
    <section id="machines" className="relative border-y border-border/50 bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead tag="The Hardware" title="New machines, no compromise" sub="We invested in the latest wash technology so your car gets treated right — every cycle." />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {machines.map(m => (
            <Card key={m.name} className="overflow-hidden border-border/60 bg-card p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">{m.tag}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.desc}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {m.specs.map(s => (
                    <div key={s} className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm">
                      <Sparkles className="h-3.5 w-3.5 text-accent" /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeepClean() {
  const steps = [
    "Vacuum every crevice — seats, mats, trunk, headliner",
    "Steam sanitize fabrics and high-touch surfaces",
    "Hand-condition leather and trim, UV protectant",
    "Streak-free glass inside and out",
    "Odor neutralization & ozone treatment",
  ];
  return (
    <section id="detail" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-3xl opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
          <img src={deepCleanImg} alt="Deep interior detailing" loading="lazy" width={1280} height={960} className="relative rounded-2xl object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Deep Clean</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Inside should feel like outside.</h2>
          <p className="mt-4 text-muted-foreground">
            Our detail team takes apart the ordinary. Multi-stage steam, hand-applied conditioners,
            and pet-safe enzyme cleaners — your interior comes back better than new.
          </p>
          <ul className="mt-8 space-y-3">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8" style={{ background: "var(--gradient-hero)", color: "var(--primary-foreground)" }}>
            <a href="#contact">Book a detail <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="border-y border-border/50 bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead tag="Gallery" title="The finish line" sub="Real cars, real results, real reflective paint." />
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImgs.map((img, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={img} alt={`Aqua Lux car wash result ${i + 1}`} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead tag="Reviews" title="Drivers love the difference" sub="" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map(t => (
          <Card key={t.name} className="border-border/60 bg-card p-7">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-4 text-foreground">"{t.text}"</p>
            <div className="mt-6 border-t border-border/50 pt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.car}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border/50 bg-surface/40 py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Visit / Book</span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Drop in. Or drop us a line.</h2>
          <p className="mt-4 text-muted-foreground">Two locations, 24/7 self-serve bays, and a detail team that books up fast.</p>
          <div className="mt-10 space-y-5">
            <Info icon={MapPin} title="Downtown Flagship" detail="412 Marina Blvd · Open 24/7" />
            <Info icon={MapPin} title="Westside Detail Shop" detail="89 Industrial Way · 8a–8p daily" />
            <Info icon={Phone} title="(555) 010-WASH" detail="Reservations & questions" />
            <Info icon={Mail} title="hello@aqualux.co" detail="Reply within 1 business hour" />
            <Info icon={Clock} title="Detail booking" detail="Mon–Sun · slots fill 3–5 days out" />
          </div>
        </div>
        <Card className="border-border/60 bg-card p-8">
          <h3 className="font-display text-2xl font-bold">Book a wash</h3>
          <p className="mt-1 text-sm text-muted-foreground">Tell us what you drive — we'll confirm by text.</p>
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Booking received! We'll text you shortly."); (e.target as HTMLFormElement).reset(); }} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Your name" />
              <Input required placeholder="Phone" />
            </div>
            <Input required placeholder="Vehicle (year, make, model)" />
            <Textarea placeholder="Which service? Any notes?" rows={4} />
            <Button type="submit" size="lg" className="w-full" style={{ background: "var(--gradient-hero)", color: "var(--primary-foreground)" }}>
              Request booking <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, detail }: { icon: typeof MapPin; title: string; detail: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{detail}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded" style={{ background: "var(--gradient-hero)" }}>
            <Droplets className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span>© {new Date().getFullYear()} Aqua Lux Car Wash. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#machines" className="hover:text-foreground">Machines</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
