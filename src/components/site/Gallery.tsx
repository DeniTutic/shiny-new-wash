import { galleryImgs } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function Gallery() {
  return (
    <section id="gallery" className="border-y border-border/60 bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          tag="Gallery"
          title="The finish line"
          sub="Real cars, real results, real reflective paint."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {galleryImgs.map((g, i) => (
            <div
              key={g.alt}
              className={`wet-sheen rounded-lg ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
