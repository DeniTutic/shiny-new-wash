import { addons, packages, type PackageId } from "@/data/site";

export type Selection = { pkg: PackageId; addons: string[] };

export const defaultSelection: Selection = { pkg: "shine", addons: [] };

export function totalFor(sel: Selection) {
  const base = packages.find((p) => p.id === sel.pkg)?.price ?? 0;
  const extra = addons.filter((a) => sel.addons.includes(a.id)).reduce((n, a) => n + a.price, 0);
  return base + extra;
}

export function summaryFor(sel: Selection) {
  const p = packages.find((x) => x.id === sel.pkg);
  const a = addons.filter((x) => sel.addons.includes(x.id)).map((x) => x.label);
  return `${p?.name}${a.length ? " + " + a.join(", ") : ""} — $${totalFor(sel)}`;
}

/** Static class maps so Tailwind can see every class name. */
export const accentClass = {
  cyan: { text: "text-foam-cyan", bar: "bg-foam-cyan", ring: "ring-foam-cyan" },
  magenta: { text: "text-foam-magenta", bar: "bg-foam-magenta", ring: "ring-foam-magenta" },
  lemon: { text: "text-foam-lemon", bar: "bg-foam-lemon", ring: "ring-foam-lemon" },
} as const;
