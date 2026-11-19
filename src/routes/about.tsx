import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, Headphones, Zap } from "lucide-react";

import { CtaBand, PageHero, Steps, WhyUs } from "@/components/home/sections";
import cap from "@/assets/navy-cap.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Nova Star Digitizing" },
      { name: "description", content: "Meet Nova Star Digitizing: a professional embroidery digitizing and vector art team focused on quality, speed and satisfaction." },
      { property: "og:title", content: "About Us — Nova Star Digitizing" },
      { property: "og:description", content: "A professional embroidery digitizing and vector art team focused on quality and speed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "High-Quality Results", text: "Every stitch path is planned by hand for clean, smooth sew-outs." },
  { icon: Zap, title: "Fast Turnaround", text: "Standard orders in 12–24 hours, rush orders in 3–4 hours." },
  { icon: Headphones, title: "Friendly Support", text: "Real people who reply quickly and care about your project." },
  { icon: Handshake, title: "Long-Term Partnership", text: "We grow with print shops, brands and embroiderers worldwide." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Welcome to Nova Star Digitizing"
        sub="Clean, accurate and production-ready files for your business — delivered with care."
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <img src={cap} alt="Embroidered navy cap" loading="lazy" width={896} height={752} className="w-full rounded-3xl object-cover shadow-card" />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-deep md:text-4xl">Your Design… Our Digitizing Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              We are a professional embroidery digitizing and vector art company. With years of
              experience, we turn logos and artwork into files that run smoothly on any machine —
              so you save time, thread and money.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                  <Icon className="size-8 text-orange" />
                  <h3 className="mt-3 font-bold text-navy-deep">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <Steps />
      <CtaBand />
    </>
  );
}
