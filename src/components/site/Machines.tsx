import { machines } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function Machines() {
  return (
    <section id="machines" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          tag="The hardware"
          title="New machines, no compromise"
          sub="We invested in the latest wash technology so your car gets treated right, every cycle."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {machines.map((m) => (
            <article
              key={m.name}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="wet-sheen relative aspect-[4/3]">
                <img
                  src={m.img}
                  alt={m.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-foam-lemon px-2.5 py-1 font-mono-num text-xs font-bold uppercase text-primary-foreground">
                  {m.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl">{m.name}</h3>
                <p className="mt-2 text-muted-foreground">{m.desc}</p>
                <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-md border border-border font-mono-num text-sm">
                  {m.specs.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex flex-col gap-0.5 p-3 ${i % 2 ? "border-l border-border" : ""} ${i > 1 ? "border-t border-border" : ""}`}
                    >
                      <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="font-medium text-foam-cyan">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
