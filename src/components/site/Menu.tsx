import type { Dispatch, SetStateAction } from "react";
import { BuildYourWash } from "./BuildYourWash";
import { MenuBoard } from "./MenuBoard";
import { SectionHead } from "./SectionHead";
import type { Selection } from "./selection";

export function Menu({
  selection,
  onChange,
}: {
  selection: Selection;
  onChange: Dispatch<SetStateAction<Selection>>;
}) {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        tag="Packages"
        title="Pick your wash"
        sub="Tap a package to pick it, then add extras. Washing often? See unlimited plans below."
      />
      <div className="mt-14">
        <MenuBoard
          selection={selection}
          onSelect={(pkg) => onChange((s) => ({ ...s, pkg, plan: undefined }))}
        />
      </div>
      <div className="mt-8">
        <BuildYourWash selection={selection} onChange={onChange} />
      </div>
    </section>
  );
}
