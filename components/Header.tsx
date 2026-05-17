"use client";
import * as React from "react";
import Image from "next/image";
import { ShoppingCart, Phone, Mail, Menu, X, Star } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { CartDrawer } from "@/components/CartDrawer";
import { cn } from "@/lib/utils";

export function Header() {
  const { totalItems } = useCartStore();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const count = totalItems();

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Accueil",      href: "/" },
    { label: "Nos Services", href: "/services" },
    { label: "Blog",         href: "#blog" },
    { label: "Contact",      href: "/devis" },
  ];

  return (
    <>
      {/* Top bar — phone + email + Trustpilot */}
      <div className="bg-navy text-white/70 text-xs">
        <div className="mx-auto max-w-screen-xl px-6 py-2 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+33187665103" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3 w-3" />(00) 875 784 5682
            </a>
            <a href="mailto:info@globalbeglaubigung.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="h-3 w-3" />info@globalbeglaubigung.com
            </a>
          </div>
          {/* Trustpilot widget */}
          <a href="https://fr.trustpilot.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[11px] text-white/60">Excellent</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex h-4 w-4 items-center justify-center bg-[#00b67a]">
                  <Star className="h-2.5 w-2.5 fill-white text-white" />
                </div>
              ))}
            </div>
            <span className="text-[11px] text-white/60">778 avis sur</span>
            <span className="font-bold text-[11px] text-white">Trustpilot</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className={cn(
        "sticky top-0 z-40 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "border-b border-gray-100"
      )}>
        <div className="mx-auto max-w-screen-xl px-6 h-20 flex items-center justify-between gap-6">
          <a href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Global Beglaubigung" width={200} height={60} className="h-14 w-auto object-contain" priority />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy rounded-lg transition-colors hover:bg-gray-50">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setDrawerOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-gold/40 hover:text-navy transition-all">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
            <a href="/devis"
              className="hidden sm:flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy-light transition-colors whitespace-nowrap">
              OBTENIR UN DEVIS
            </a>
            <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileOpen(v => !v)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-navy border-b border-gray-50">
                {l.label}
              </a>
            ))}
            <div className="pt-3">
              <a href="/devis" className="block w-full text-center rounded-full bg-navy py-3 text-sm font-bold text-white">
                OBTENIR UN DEVIS
              </a>
            </div>
          </div>
        )}
      </header>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
