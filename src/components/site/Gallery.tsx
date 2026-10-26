import { galleryImgs } from "@/data/site";
import { BeforeAfter } from "./BeforeAfter";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead
        tag="Results"
        title="The finish line"
        sub="Same car, one wash apart. Drag the divider to wipe away the grime."
      />
      <div className="mx-auto mt-14 max-w-5xl">
        <BeforeAfter />
        <ul className="mt-3 grid grid-cols-3 gap-3">
          {galleryImgs.map((g) => (
            <li key={g.alt} className="wet-sheen rounded-lg">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full rounded-lg object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
