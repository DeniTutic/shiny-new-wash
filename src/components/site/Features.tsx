import { features } from "@/data/site";

export function Features() {
  return (
    <section className="border-y border-border/60 bg-surface">
      <ul className="mx-auto grid max-w-7xl divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {features.map((f, i) => (
          <li key={f.title} className="flex items-start gap-4 p-7">
            <span className="font-mono-num text-sm text-foam-magenta" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
