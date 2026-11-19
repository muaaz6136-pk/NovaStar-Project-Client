import { createFileRoute } from "@tanstack/react-router";

import { CtaBand, PageHero, PortfolioGrid } from "@/components/home/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nova Star Digitizing Sample Work" },
      { name: "description", content: "See sample embroidery digitizing, vector art and custom patch work by Nova Star Digitizing." },
      { property: "og:title", content: "Portfolio — Nova Star Digitizing" },
      { property: "og:description", content: "Sample embroidery digitizing, vector art and custom patches." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Work We're Proud Of" sub="Mascots, crests, badges and logos — digitized for flawless sew-outs." />
      <PortfolioGrid showButton={false} />
      <CtaBand />
    </>
  );
}
