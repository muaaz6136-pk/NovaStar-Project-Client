import { createFileRoute } from "@tanstack/react-router";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand, PageHero } from "@/components/home/sections";
import { faqs } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nova Star Digitizing" },
      { name: "description", content: "Answers about file formats, turnaround times, free edits and how to send artwork to Nova Star Digitizing." },
      { property: "og:title", content: "FAQ — Nova Star Digitizing" },
      { property: "og:description", content: "File formats, turnaround times, edits and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" sub="Everything you need to know before placing your first order." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="rounded-2xl border border-border bg-card px-6 shadow-card">
                <AccordionTrigger className="text-left text-base font-bold text-navy-deep hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
