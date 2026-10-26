import { Check } from "lucide-react";
import { matrix, packages } from "@/data/site";
import { accentClass, type Selection } from "./selection";

/** The lit menu sign at the tunnel entrance. Tap a package to select it. */
export function MenuBoard({
  selection,
  onSelect,
}: {
  selection: Selection;
  onSelect: (id: Selection["pkg"]) => void;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-card"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div aria-hidden className="foam-stripe h-1.5" />

      {/* md+: matrix table */}
      <table className="hidden w-full border-collapse md:table">
        <caption className="sr-only">Wash packages and what each includes</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="w-[28%] p-5 text-left font-mono-num text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              Package
            </th>
            {packages.map((p) => {
              const a = accentClass[p.accent];
              const on = !selection.plan && selection.pkg === p.id;
              return (
                <th
                  key={p.id}
                  scope="col"
                  className={`relative p-0 text-left align-top ${on ? "bg-secondary" : ""}`}
                >
                  <button
                    onClick={() => onSelect(p.id)}
                    aria-pressed={on}
                    className="block w-full p-5 text-left transition hover:bg-secondary/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className={`block h-1 w-8 rounded-full ${a.bar}`} />
                    <span
                      className="mt-3 flex items-center gap-2 font-display text-base font-extrabold uppercase"
                      style={{ fontStretch: "125%" }}
                    >
                      {p.name}
                      {p.popular && (
                        <span className="rounded bg-foam-lemon px-1.5 py-0.5 font-mono-num text-[10px] font-bold text-primary-foreground">
                          POPULAR
                        </span>
                      )}
                    </span>
                    <span
                      className={`led-glow mt-1 block font-mono-num text-3xl font-bold ${a.text}`}
                    >
                      ${p.price}
                    </span>
                    <span className="mt-1 block font-mono-num text-xs font-normal text-muted-foreground">
                      {p.time}
                    </span>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row) => (
            <tr key={row.step} className="border-t border-border/60">
              <th
                scope="row"
                className="px-5 py-3 text-left text-sm font-normal text-foreground/90"
              >
                {row.step}
              </th>
              {packages.map((p) => {
                const included = row.in.includes(p.id);
                const on = !selection.plan && selection.pkg === p.id;
                return (
                  <td key={p.id} className={`px-5 py-3 ${on ? "bg-secondary" : ""}`}>
                    {included ? (
                      <>
                        <Check className={`h-4 w-4 ${accentClass[p.accent].text}`} aria-hidden />
                        <span className="sr-only">Included</span>
                      </>
                    ) : (
                      <span className="text-muted-foreground/50" aria-label="Not included">
                        —
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* mobile: stacked packages */}
      <div className="divide-y divide-border/60 md:hidden">
        {packages.map((p) => {
          const a = accentClass[p.accent];
          const on = !selection.plan && selection.pkg === p.id;
          return (
            <div key={p.id} className={`p-5 ${on ? "bg-secondary" : ""}`}>
              <button
                onClick={() => onSelect(p.id)}
                aria-pressed={on}
                className="flex w-full items-baseline justify-between text-left"
              >
                <span>
                  <span className={`block h-1 w-8 rounded-full ${a.bar}`} />
                  <span
                    className="mt-2 block font-display text-lg font-extrabold uppercase"
                    style={{ fontStretch: "125%" }}
                  >
                    {p.name}
                  </span>
                  <span className="font-mono-num text-xs text-muted-foreground">{p.time}</span>
                </span>
                <span className={`led-glow font-mono-num text-3xl font-bold ${a.text}`}>
                  ${p.price}
                </span>
              </button>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {matrix
                  .filter((r) => r.in.includes(p.id))
                  .map((r) => (
                    <li key={r.step} className="flex items-center gap-2">
                      <Check className={`h-3.5 w-3.5 shrink-0 ${a.text}`} aria-hidden /> {r.step}
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
