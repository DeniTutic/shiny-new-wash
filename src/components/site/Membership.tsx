import type { Dispatch, SetStateAction } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages, planPerks, plans } from "@/data/site";
import { SectionHead } from "./SectionHead";
import { accentClass, type Selection } from "./selection";

export function Membership({
  selection,
  onChange,
}: {
  selection: Selection;
  onChange: Dispatch<SetStateAction<Selection>>;
}) {
  return (
    <section id="membership" className="border-y border-border/60 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          tag="Membership"
          title="Wash unlimited"
          sub="Wash every week and a plan pays for itself. Both locations, as often as you like."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const a = accentClass[p.accent];
            const base = packages.find((x) => x.id === p.pkg)!;
            // visits per month after which the plan is cheaper than paying per wash
            const breakEven = Math.ceil(p.price / base.price);
            const on = selection.plan === p.id;
            return (
              <article
                key={p.id}
                className={`relative flex flex-col rounded-xl border bg-card p-7 transition ${
                  on ? "border-foam-cyan" : "border-border"
                }`}
                style={on || p.popular ? { boxShadow: "var(--shadow-card)" } : undefined}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded bg-foam-lemon px-2 py-0.5 font-mono-num text-[10px] font-bold uppercase text-primary-foreground">
                    Most popular
                  </span>
                )}
                <span className={`block h-1 w-8 rounded-full ${a.bar}`} />
                <h3 className="mt-3 text-xl">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className={`led-glow font-mono-num text-5xl font-bold ${a.text}`}>
                    ${p.price}
                  </span>
                  <span className="font-mono-num text-sm text-muted-foreground">/mo</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {breakEven === 1
                    ? `Pays for itself on your first wash (single ${base.name} is $${base.price}).`
                    : `Pays for itself after ${breakEven} washes a month (single ${base.name} is $${base.price}).`}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} aria-hidden />
                    Unlimited {base.name} washes
                  </li>
                  {planPerks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-foreground/90">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} aria-hidden />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={on || p.popular ? "default" : "outline"}
                  className="mt-8 w-full font-semibold"
                >
                  <a
                    href="#contact"
                    aria-pressed={on}
                    onClick={() => onChange((s) => ({ ...s, pkg: p.pkg, plan: p.id }))}
                  >
                    {on ? "Selected" : "Join"} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
