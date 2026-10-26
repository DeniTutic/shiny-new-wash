import type { Dispatch, SetStateAction } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { addons } from "@/data/site";
import { nameFor, priceLabel, type Selection } from "./selection";

/** Add-ons on top of whatever is picked on the menu board (or a membership plan). */
export function BuildYourWash({
  selection,
  onChange,
}: {
  selection: Selection;
  onChange: Dispatch<SetStateAction<Selection>>;
}) {
  const toggle = (id: string, on: boolean) =>
    onChange((s) => ({ ...s, addons: on ? [...s.addons, id] : s.addons.filter((a) => a !== id) }));

  return (
    <div
      className="rounded-xl border border-border bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <fieldset className="flex-1">
          <legend className="font-mono-num text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Add-ons
          </legend>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-x-10">
            {addons.map((a) => (
              <div key={a.id} className="flex items-center gap-3">
                <Checkbox
                  id={`addon-${a.id}`}
                  checked={selection.addons.includes(a.id)}
                  onCheckedChange={(c) => toggle(a.id, c === true)}
                />
                <Label
                  htmlFor={`addon-${a.id}`}
                  className="flex flex-1 cursor-pointer items-baseline justify-between text-base font-normal"
                >
                  {a.label}
                  <span className="font-mono-num text-sm text-muted-foreground">+${a.price}</span>
                </Label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="rounded-lg border border-border bg-background p-5 lg:w-72">
          <div className="font-mono-num text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Your wash
          </div>
          <div className="mt-1 truncate font-semibold">{nameFor(selection)}</div>
          <div
            className="led-glow mt-1 font-mono-num text-4xl font-bold text-foam-cyan"
            aria-live="polite"
          >
            {priceLabel(selection)}
          </div>
          <Button asChild className="mt-4 w-full font-semibold">
            <a href="#contact">
              Book this <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
