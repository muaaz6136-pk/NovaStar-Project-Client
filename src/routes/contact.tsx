import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/home/sections";
import { contact, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote — Nova Star Digitizing" },
      { name: "description", content: "Send your artwork and get a fast quote for embroidery digitizing, vector art or custom patches." },
      { property: "og:title", content: "Request a Quote — Nova Star Digitizing" },
      { property: "og:description", content: "Send your artwork and get a fast quote." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [service, setService] = useState<string>(services[0].title);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const subject = `Quote request: ${service} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Service: ${service}`,
      `Size / details: ${data.get("size")}`,
      "",
      String(data.get("message") ?? ""),
      "",
      "(Please attach your artwork to this email.)",
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app — attach your artwork and hit send!");
  }

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Request a Free Quote" sub="Send us your artwork and we'll reply with a quote — usually within the hour." />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
              { icon: MapPin, label: "Serving", value: "USA, Canada, UK & France" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="grid size-12 place-items-center rounded-full bg-gradient-orange text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="font-bold text-navy-deep hover:text-orange">{value}</a>
                  ) : (
                    <p className="font-bold text-navy-deep">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" name="name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Service</Label>
              <div className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setService(s.title)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      service === s.title
                        ? "border-transparent bg-gradient-orange text-accent-foreground shadow-orange"
                        : "border-border text-navy-deep hover:border-orange"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Size / Placement</Label>
              <Input id="size" name="size" placeholder="e.g. 3.5 inch left chest" maxLength={200} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} maxLength={2000} placeholder="Tell us about your design, colors and deadline…" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Send Request <Send />
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
