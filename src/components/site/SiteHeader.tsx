import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Handshake, Mail, Menu, Phone, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { contact, navLinks, services } from "@/lib/site";
import { Logo } from "./Logo";

const linkBase =
  "rounded-full px-4 py-2 text-[0.95rem] font-semibold text-navy-deep transition-colors hover:text-orange";
const linkActive = "bg-gradient-orange text-accent-foreground shadow-orange hover:text-accent-foreground";

function TopBar() {
  return (
    <div className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm">
        <div className="flex items-center gap-5">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-orange-soft">
            <Mail className="size-4" />
            <span className="hidden sm:inline">{contact.email}</span>
          </a>
          <span className="hidden h-4 w-px bg-primary-foreground/30 sm:block" />
          <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-orange-soft">
            <Phone className="size-4" />
            {contact.phone}
          </a>
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2"><Zap className="size-4 text-orange" />Fast Turnaround</span>
          <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-orange" />Premium Quality</span>
          <span className="flex items-center gap-2"><Handshake className="size-4 text-orange" />100% Satisfaction</span>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <div
        className={`relative transition-all duration-300 ${
          scrolled ? "bg-card/95 shadow-card backdrop-blur" : "bg-card/55 backdrop-blur-md"
        }`}
      >
        {/* White slanted panel behind the logo, as in the brand mockup */}
        <div className="logo-panel absolute inset-y-0 left-0 w-[min(46vw,30rem)] bg-card" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" aria-label="Nova Star Digitizing home">
            <Logo className="h-12 md:h-16" />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) =>
              "hasMenu" in l ? (
                <div key={l.to} className="group relative">
                  <Link
                    to={l.to}
                    className={`${linkBase} inline-flex items-center gap-1`}
                    activeProps={{ className: linkActive }}
                  >
                    {l.label}
                    <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-border bg-card p-2 shadow-card">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          to="/services"
                          hash={s.id}
                          className="block rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep hover:bg-surface hover:text-orange"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className={linkBase}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: linkActive }}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" className="hidden h-11 px-6 sm:inline-flex">
              <Link to="/contact">
                Request a Quote <ArrowRight />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={linkBase}
                      activeOptions={{ exact: l.to === "/" }}
                      activeProps={{ className: linkActive }}
                    >
                      {l.label}
                    </Link>
                  ))}
                  <Button asChild variant="hero" className="mt-4 h-11">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Request a Quote <ArrowRight />
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
