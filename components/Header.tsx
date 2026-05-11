"use client";

import * as React from "react";
import { ShoppingCart, ShieldCheck, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { CartDrawer } from "@/components/CartDrawer";
import { cn } from "@/lib/utils";

export function Header() {
  const { totalItems } = useCartStore();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [badgeBump, setBadgeBump] = React.useState(false);
  const itemCount = totalItems();
  const prevCount = React.useRef(itemCount);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (itemCount > prevCount.current) {
      setBadgeBump(true);
      const t = setTimeout(() => setBadgeBump(false), 400);
      prevCount.current = itemCount;
      return () => clearTimeout(t);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  const navLinks = [
    { label: "Nos Services", href: "#products" },
    { label: "Langues", href: "#languages" },
    { label: "FAQ", href: "#faq" },
    { label: "Suivi commande", href: "/suivi" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b border-white/8 bg-navy transition-shadow duration-300",
          scrolled && "shadow-[0_2px_40px_rgba(0,0,0,0.4)]"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-screen-xl items-center justify-between px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 font-serif text-[22px] font-bold text-white no-underline tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange">
              <ShieldCheck className="h-[18px] w-[18px] text-white" />
            </div>
            CertifyTrad
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/7 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Cart button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/8 text-white transition-colors hover:bg-white/14"
              title="Voir le panier"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-navy bg-orange px-0.5 text-[10px] font-bold text-white",
                    badgeBump && "animate-bump"
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="hidden rounded-xl bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-orange-light hover:shadow-[0_4px_20px_rgba(245,124,0,0.4)] sm:block"
            >
              Nouvelle Commande
            </button>

            {/* Mobile hamburger */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <div className="border-t border-white/8 bg-navy px-6 pb-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="block border-b border-white/8 py-4 text-lg font-medium text-white/75 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileNavOpen(false);
                setDrawerOpen(true);
              }}
              className="mt-4 w-full rounded-xl bg-orange py-3 text-sm font-bold text-white"
            >
              Nouvelle Commande
            </button>
          </div>
        )}
      </header>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
