import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Cog,
  Download,
  FileText,
  Gem,
  Handshake,
  Mail,
  Quote,
  Settings,
  Star,
  Timer,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Swoosh } from "@/components/site/Swoosh";
import heroImg from "@/assets/hero-novastar-bg.jpg";
import { portfolio, reviews } from "@/lib/site";

export function PortfolioGrid({ limit, showButton = true }: { limit?: number; showButton?: boolean }) {
  const items = limit ? portfolio.slice(0, limit) : portfolio;
  return (
    <section className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Our Latest Work"
          sub="Explore our sample work including embroidery digitizing, vector art and custom patches."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((p) => (
            <figure
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  width={896}
                  height={752}
                  className="aspect-[6/5] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="px-3 py-2 text-center">
                <p className="text-sm font-bold text-navy-deep">{p.title}</p>
                <p className="text-xs text-orange">{p.type}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        {showButton && (
          <div className="mt-10 text-center">
            <Button asChild variant="navy" className="h-11 px-6">
              <Link to="/portfolio">
                View More Portfolio <ArrowRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

const reasons = [
  { icon: Gem, label: "Premium Quality" },
  { icon: Timer, label: "Fast Delivery" },
  { icon: CircleDollarSign, label: "Affordable Pricing" },
  { icon: Cog, label: "Production-Ready Files" },
  { icon: Handshake, label: "Dedicated Support" },
];

export function WhyUs() {
  return (
    <section className="band-navy overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <span className="eyebrow eyebrow-light">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
            Your Trusted <br />
            Digitizing <span className="text-gradient-orange">Partner</span>
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            We go beyond digitizing — we deliver excellence, on time, every time.
          </p>
          <Button asChild variant="hero" className="mt-6 h-11 px-6">
            <Link to="/contact">
              Get a Quote <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 sm:grid-cols-3 lg:grid-cols-5">
          {reasons.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 bg-navy-deep/60 px-4 py-8 text-center transition-colors hover:bg-navy"
            >
              <Icon className="size-10 text-orange" strokeWidth={1.6} />
              <p className="font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Mail, label: "Send Your Artwork" },
  { icon: FileText, label: "Get a Quote" },
  { icon: Settings, label: "We Digitize Your Design" },
  { icon: Download, label: "Receive Your Files" },
];

export function Steps() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="How It Works" title="Simple Steps to Get Your Design" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, label }, i) => (
            <li key={label} className="relative flex items-center gap-4 lg:flex-col lg:text-center">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-navy text-lg font-extrabold text-primary-foreground shadow-navy">
                {i + 1}
              </span>
              <div className="flex items-center gap-3 lg:flex-col">
                <Icon className="size-8 text-navy" strokeWidth={1.8} />
                <p className="font-bold text-navy-deep">{label}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-6 top-3 hidden size-6 text-orange lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className="band-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-[1fr_3fr]">
        <div>
          <span className="eyebrow eyebrow-light">Client Reviews</span>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={prev} aria-label="Previous review" className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-foreground/10 hover:bg-orange">
            <ChevronLeft className="size-5" />
          </button>
          <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((r) => (
                <div key={r.name} className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-1/2 xl:basis-1/3">
                  <article className="relative h-full rounded-2xl bg-card p-5 text-card-foreground shadow-card">
                    <Quote className="absolute right-4 top-4 size-6 text-muted-foreground/40" />
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-orange font-bold text-accent-foreground">
                        {initials(r.name)}
                      </span>
                      <div>
                        <p className="text-sm italic">“{r.text}”</p>
                        <div className="mt-2 flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="size-3.5 fill-star text-star" />
                          ))}
                        </div>
                        <p className="mt-1 text-sm font-bold text-navy-deep">
                          {r.name}, {r.country}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button onClick={next} aria-label="Next review" className="grid size-10 shrink-0 place-items-center rounded-full bg-primary-foreground/10 hover:bg-orange">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-[70%_80%] opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 text-primary-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Get Started?</h2>
          <p className="mt-2 text-primary-foreground/80">Send us your artwork and get a fast quote.</p>
        </div>
        <Button asChild variant="hero" size="xl">
          <Link to="/contact">
            Request a Quote <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden band-navy">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-44 md:pb-24 md:pt-52">
        <span className="eyebrow eyebrow-light animate-rise">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold animate-rise md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-primary-foreground/80 animate-rise">{sub}</p>
      </div>
      <Swoosh fillClass="fill-background" className="relative -mb-px" />
    </section>
  );
}
