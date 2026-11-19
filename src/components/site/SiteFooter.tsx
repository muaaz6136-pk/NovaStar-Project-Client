import { Link } from "@tanstack/react-router";
import { Check, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { contact, services } from "@/lib/site";
import { Logo } from "./Logo";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact Us" },
] as const;

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="band-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr_0.8fr]">
        <div>
          <div className="inline-block rounded-2xl bg-card p-3">
            <Logo className="h-14" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
            Professional embroidery digitizing, vector art and custom patches — delivered fast.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-orange-soft">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {services.map((s) => (
              <li key={s.id} className="flex items-center gap-2">
                <Check className="size-4 text-orange" />
                <Link to="/services" hash={s.id} className="hover:text-orange-soft">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li><a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-orange-soft"><Mail className="size-4 text-orange" />{contact.email}</a></li>
            <li><a href={contact.phoneHref} className="flex items-center gap-2 hover:text-orange-soft"><Phone className="size-4 text-orange" />{contact.phone}</a></li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-orange" />{contact.regions}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <div className="mt-4 flex gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-orange"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-primary-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Nova Star Digitizing. All Rights Reserved.</p>
          <p className="font-script text-base text-primary-foreground">Your Design... Our Digitizing Expertise</p>
        </div>
      </div>
    </footer>
  );
}
