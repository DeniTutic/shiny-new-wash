import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import deepCleanImg from "@/assets/deep-clean.jpg";
import { detailSteps } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function DeepClean() {
  return (
    <section id="detail" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={deepCleanImg}
            alt="Deep interior detailing"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-xl object-cover"
          />
          <div aria-hidden className="foam-stripe absolute inset-x-0 bottom-0 h-1.5 rounded-b-xl" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHead
            align="left"
            tag="Deep clean"
            title="Inside should feel like outside."
            sub="Our detail team takes apart the ordinary. Multi-stage steam, hand-applied conditioners and pet-safe enzyme cleaners — your interior comes back better than new."
          />
          <ol className="relative mt-8 space-y-5 border-l border-border pl-8">
            {detailSteps.map((s, i) => (
              <li key={s} className="relative">
                <span className="absolute -left-[2.9rem] grid h-7 w-7 place-items-center rounded-full border border-foam-cyan bg-background font-mono-num text-xs font-bold text-foam-cyan">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
          <Button asChild size="lg" className="mt-8 font-semibold">
            <a href="#contact">
              Book a detail <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
