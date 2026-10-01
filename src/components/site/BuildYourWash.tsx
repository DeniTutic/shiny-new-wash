import type { Dispatch, SetStateAction } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { addons, packages, type PackageId } from "@/data/site";
import { totalFor, type Selection } from "./selection";

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
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="grid flex-1 gap-8 sm:grid-cols-2">
          <fieldset>
            <legend className="font-mono-num text-xs uppercase tracking-[0.2em] text-muted-foreground">
              1 · Package
            </legend>
            <RadioGroup
              value={selection.pkg}
              onValueChange={(v) => onChange((s) => ({ ...s, pkg: v as PackageId }))}
              className="mt-4 gap-3"
            >
              {packages.map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <RadioGroupItem value={p.id} id={`pkg-${p.id}`} />
                  <Label
                    htmlFor={`pkg-${p.id}`}
                    className="flex flex-1 cursor-pointer items-baseline justify-between text-base font-normal"
                  >
                    {p.name}
                    <span className="font-mono-num text-sm text-muted-foreground">${p.price}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </fieldset>
          <fieldset>
            <legend className="font-mono-num text-xs uppercase tracking-[0.2em] text-muted-foreground">
              2 · Add-ons
            </legend>
            <div className="mt-4 space-y-3">
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
        </div>

        <div className="rounded-lg border border-border bg-background p-5 lg:w-64">
          <div className="font-mono-num text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Your total
          </div>
          <div
            className="led-glow mt-1 font-mono-num text-5xl font-bold text-foam-cyan"
            aria-live="polite"
          >
            ${totalFor(selection)}
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
