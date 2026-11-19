import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand, PageHero } from "@/components/home/sections";
import { pricing } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Affordable Embroidery Digitizing | Nova Star" },
      { name: "description", content: "Simple, affordable pricing for embroidery digitizing, jacket backs and vector art conversion." },
      { property: "og:title", content: "Pricing — Nova Star Digitizing" },
      { property: "og:description", content: "Simple, affordable pricing for digitizing and vector art." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Simple, Affordable Pricing" sub="No hidden fees. Free edits until you're happy." />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={cn(
                "flex flex-col rounded-3xl border p-8 shadow-card",
                "featured" in p ? "band-navy border-transparent md:-translate-y-4" : "border-border bg-card",
              )}
            >
              {"featured" in p && (
                <span className="mb-4 self-start rounded-full bg-gradient-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h2 className={cn("text-xl font-bold", "featured" in p ? "" : "text-navy-deep")}>{p.name}</h2>
              <p className="mt-4 flex items-end gap-2">
                <span className={cn("text-5xl font-extrabold", "featured" in p ? "text-gradient-orange" : "text-navy")}>{p.price}</span>
                <span className="pb-2 text-sm opacity-70">{p.unit}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="size-4 text-orange" /> {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={"featured" in p ? "hero" : "navy"} className="mt-8 h-11">
                <Link to="/contact">Order Now <ArrowRight /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
