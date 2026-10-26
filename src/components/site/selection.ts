import { addons, packages, plans, type PackageId, type PlanId } from "@/data/site";

/** A single-visit package, or a membership plan (which implies its base package). */
export type Selection = { pkg: PackageId; addons: string[]; plan?: PlanId };

export const defaultSelection: Selection = { pkg: "shine", addons: [] };

export const planFor = (sel: Selection) => plans.find((p) => p.id === sel.plan);

export function nameFor(sel: Selection) {
  return planFor(sel)?.name ?? packages.find((p) => p.id === sel.pkg)?.name ?? "";
}

/** Add-ons are paid per visit, on top of a package or a plan. */
function addonTotal(sel: Selection) {
  return addons.filter((a) => sel.addons.includes(a.id)).reduce((n, a) => n + a.price, 0);
}

export function priceLabel(sel: Selection) {
  const extra = addonTotal(sel);
  const plan = planFor(sel);
  if (plan) return extra ? `$${plan.price}/mo + $${extra}` : `$${plan.price}/mo`;
  return `$${(packages.find((p) => p.id === sel.pkg)?.price ?? 0) + extra}`;
}

export function summaryFor(sel: Selection) {
  const a = addons.filter((x) => sel.addons.includes(x.id)).map((x) => x.label);
  return `${nameFor(sel)}${a.length ? " + " + a.join(", ") : ""} — ${priceLabel(sel)}`;
}

/** Static class maps so Tailwind can see every class name. */
export const accentClass = {
  cyan: { text: "text-foam-cyan", bar: "bg-foam-cyan", ring: "ring-foam-cyan" },
  magenta: { text: "text-foam-magenta", bar: "bg-foam-magenta", ring: "ring-foam-magenta" },
  lemon: { text: "text-foam-lemon", bar: "bg-foam-lemon", ring: "ring-foam-lemon" },
} as const;
