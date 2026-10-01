import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead tag="Reviews" title="Drivers love the difference" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-xl border border-border bg-card p-7">
            <div className="flex gap-1 text-foam-lemon" role="img" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-4 text-foreground">“{t.text}”</blockquote>
            <figcaption className="mt-6 border-t border-border/60 pt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="font-mono-num text-xs text-muted-foreground">{t.car}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
