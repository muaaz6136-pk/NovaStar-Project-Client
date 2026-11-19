import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, Steps } from "@/components/home/sections";
import { serviceIcons } from "@/components/site/ServiceIcons";
import cap from "@/assets/navy-cap.jpg";
import eagle from "@/assets/work-eagle.jpg";
import adventure from "@/assets/work-adventure.jpg";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Embroidery Digitizing, Vector Art & Patches | Nova Star" },
      { name: "description", content: "Embroidery digitizing for caps, chests and jacket backs, hand-traced vector art and custom patch designs." },
      { property: "og:title", content: "Services — Nova Star Digitizing" },
      { property: "og:description", content: "Embroidery digitizing, vector art and custom patches." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const images = { embroidery: cap, vector: eagle, patches: adventure } as const;

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Everything Your Embroidery Business Needs" sub="Three core services, one promise: production-ready files, on time." />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.id];
            return (
              <article id={s.id} key={s.id} className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2">
                <img src={images[s.id]} alt={s.title} loading="lazy" width={896} height={752} className={`w-full rounded-3xl object-cover shadow-card ${i % 2 ? "lg:order-2" : ""}`} />
                <div>
                  <span className="grid size-14 place-items-center rounded-2xl bg-gradient-navy text-orange shadow-navy">
                    <Icon className="size-7" />
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold text-navy-deep">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.short}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 font-semibold text-navy-deep">
                        <Check className="size-5 text-orange" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" className="mt-6 h-11 px-6">
                    <Link to="/contact">Get a Quote <ArrowRight /></Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Steps />
      <CtaBand />
    </>
  );
}
