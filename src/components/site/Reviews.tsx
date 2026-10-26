import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function Reviews() {
  return (
    <section id="reviews" className="border-y border-border/60 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead tag="Reviews" title="Drivers love the difference" />
        <p className="mt-5 flex items-center justify-center gap-2 font-mono-num text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-current text-foam-lemon" aria-hidden />
          <span>
            <span className="font-bold text-foreground">4.9</span> average from 2,400+ Google
            reviews
          </span>
        </p>
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
      </div>
    </section>
  );
}
