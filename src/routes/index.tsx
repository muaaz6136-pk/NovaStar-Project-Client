import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Clock,
  Globe,
  Handshake,
  Headphones,
  ImageIcon,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand, PortfolioGrid, Reviews, Steps, WhyUs } from "@/components/home/sections";
import heroBg from "@/assets/hero-novastar-bg.jpg";
import cardCap from "@/assets/card-cap.png";
import cardVector from "@/assets/card-vector.png";
import cardPatch from "@/assets/card-patch.png";
import cap from "@/assets/navy-cap.jpg";
import tiger from "@/assets/work-tiger.jpg";
import usa from "@/assets/work-usa.jpg";
import eagle from "@/assets/work-eagle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Star Digitizing — Embroidery Digitizing & Vector Art" },
      {
        name: "description",
        content:
          "High-quality, production-ready embroidery digitizing, vector art and custom patches with fast turnaround. Serving USA, Canada, UK & France.",
      },
      { property: "og:title", content: "Nova Star Digitizing — Embroidery Digitizing & Vector Art" },
      {
        property: "og:description",
        content: "Production-ready embroidery files, vector art and custom patches — delivered fast.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroCards = [
  { id: "embroidery", title: "Embroidery Digitizing", img: cardCap, w: 440, h: 331 },
  { id: "vector", title: "Vector Art", img: cardVector, w: 327, h: 360 },
  { id: "patches", title: "Custom Patches", img: cardPatch, w: 288, h: 360 },
] as const;

function HeroSwooshBottom() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full md:h-56 lg:h-72"
    >
      <path
        d="M0 320 L0 268 C 320 250, 640 268, 900 222 C 1110 184, 1290 104, 1440 44 L1440 320 Z"
        className="fill-navy"
      />
      <path
        d="M0 320 L0 286 C 320 270, 640 288, 920 246 C 1130 212, 1300 138, 1440 84 L1440 320 Z"
        className="fill-navy-deep"
      />
      <path
        d="M0 258 C 320 238, 640 256, 900 210 C 1110 172, 1290 92, 1440 32"
        className="fill-none stroke-orange"
        strokeWidth="9"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M560 312 C 800 300, 1040 266, 1250 214 C 1330 194, 1390 176, 1440 160"
        className="fill-none stroke-orange"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function HeroSwooshTop() {
  return (
    <svg
      viewBox="0 0 480 220"
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-[7.75rem] hidden w-[min(16vw,16rem)] xl:block"
    >
      <path d="M0 0 H420 C 260 26, 110 80, 0 170 Z" className="fill-navy-deep" />
      <path d="M0 200 C 110 112, 260 50, 440 18" className="fill-none stroke-orange" strokeWidth="10" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <img
        src={heroBg}
        alt="Embroidery machine stitching the Nova Star Digitizing logo on navy fabric"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="absolute inset-0 bg-background/70 lg:hidden" />
      <HeroSwooshTop />

      <div className="relative mx-auto max-w-7xl px-4 pb-44 pt-40 md:pb-56 md:pt-44 lg:pb-32">
        <div className="max-w-3xl animate-rise">
          <span className="eyebrow">Professional • Reliable • On Time</span>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] text-navy-deep md:text-6xl xl:text-[4.6rem]">
            Embroidery Digitizing
            <span className="block text-gradient-orange">&amp; Vector Art</span>
          </h1>
          <p className="mt-5 max-w-md text-xl font-semibold leading-snug text-navy-deep md:text-2xl">
            High-quality, production-ready files with fast turnaround time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="navy" size="xl">
              <Link to="/contact">
                Get a Free Quote <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineNavy" size="xl">
              <Link to="/portfolio">
                <ImageIcon /> View Portfolio
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="relative z-10 mt-10 grid max-w-3xl grid-cols-3 divide-x divide-border rounded-3xl border border-card bg-card/90 shadow-card backdrop-blur animate-rise"
          style={{ animationDelay: "0.15s" }}
        >
          {heroCards.map((c) => (
            <Link
              key={c.id}
              to="/services"
              hash={c.id}
              className="group flex flex-col items-center justify-end gap-2 px-3 py-5 text-center"
            >
              <img
                src={c.img}
                alt=""
                width={c.w}
                height={c.h}
                className="h-16 w-auto object-contain drop-shadow-lg transition-transform group-hover:-translate-y-1 md:h-24"
              />
              <span className="text-sm font-bold leading-tight text-navy-deep md:text-lg">{c.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <HeroSwooshBottom />
      <p className="absolute bottom-8 right-6 hidden -rotate-6 text-right font-script text-3xl leading-snug text-primary-foreground md:block lg:bottom-10 lg:right-16 lg:text-[2.75rem]">
        Your Design...
        <br />
        Our Digitizing Expertise
      </p>
    </section>
  );
}

const trust = [
  { icon: Trophy, text: "Trusted by Clients Worldwide" },
  { icon: Globe, text: "Serving USA, Canada, UK & France" },
  { icon: Clock, text: "On-Time Delivery" },
];

function TrustStrip() {
  return (
    <section className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 pb-8 pt-2 md:grid-cols-4 md:divide-x md:divide-primary-foreground/20">
        {trust.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center justify-center gap-3">
            <Icon className="size-9 shrink-0" strokeWidth={1.5} />
            <p className="max-w-[11rem] text-sm font-semibold">{text}</p>
          </div>
        ))}
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-star text-star" />
            ))}
          </div>
          <p className="text-sm font-semibold">100% Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  { icon: Award, title: "High-Quality Results" },
  { icon: Zap, title: "Fast Turnaround (3–4 Hours)" },
  { icon: Headphones, title: "Friendly Support" },
  { icon: Handshake, title: "Long-Term Partnership" },
];

function About() {
  const collage = [
    { src: cap, cls: "col-span-2 row-span-2 -rotate-3" },
    { src: tiger, cls: "col-span-2 row-span-2 rotate-2 translate-y-4" },
    { src: eagle, cls: "col-span-2 row-span-2 rotate-2" },
    { src: usa, cls: "col-span-2 row-span-2 -rotate-3 translate-y-4" },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_1.3fr_0.8fr]">
        <div className="grid grid-cols-4 gap-4">
          {collage.map((c, i) => (
            <img
              key={i}
              src={c.src}
              alt=""
              loading="lazy"
              width={896}
              height={752}
              className={`${c.cls} aspect-[6/5] w-full rounded-2xl border-4 border-card object-cover shadow-card transition-transform hover:rotate-0 hover:scale-105`}
            />
          ))}
        </div>

        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep md:text-4xl">
            Welcome to <span className="text-orange">Nova Star</span> Digitizing
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are a professional embroidery digitizing and vector art company, delivering clean,
            accurate and production-ready files for your business needs. With years of experience,
            we are committed to quality, speed and customer satisfaction.
          </p>
          <Button asChild variant="navy" className="mt-6 h-11 px-6">
            <Link to="/about">
              Learn More <ArrowRight />
            </Link>
          </Button>
        </div>

        <ul className="space-y-6 border-border lg:border-l lg:pl-8">
          {highlights.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface text-navy">
                <Icon className="size-6" />
              </span>
              <span className="font-bold text-navy-deep">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <PortfolioGrid limit={6} />
      <WhyUs />
      <Steps />
      <Reviews />
      <CtaBand />
    </>
  );
}
