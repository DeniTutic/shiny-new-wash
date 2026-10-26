import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { SectionHead } from "./SectionHead";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHead tag="FAQ" title="Before you pull in" />
      <Accordion type="single" collapsible className="mt-12 border-t border-border/60">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="border-border/60">
            <AccordionTrigger className="py-5 text-base hover:no-underline hover:text-foam-cyan">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
