"use client";

import * as React from "react";
import {
  PenLine, GraduationCap, Car, BookOpen, ShoppingCart, Check, ChevronDown, Minus, Plus,
} from "lucide-react";
import { useCartStore } from "@/store/cart";
import { toast } from "@/components/ui/use-toast";
import { type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const ICONS: Record<number, React.ElementType> = {
  1: PenLine,
  2: GraduationCap,
  3: Car,
  4: BookOpen,
};

const LANG_PAIRS = [
  "FR → Anglais",
  "FR → Arabe",
  "FR → Espagnol",
  "FR → Allemand",
  "FR → Italien",
  "FR → Portugais",
  "FR → Turc",
  "FR → Russe",
  "FR → Chinois",
  "FR → Néerlandais",
  "AR → Français",
  "EN → Français",
  "ES → Français",
];

const BASE_PRICE = 35;

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [langPair, setLangPair] = React.useState(LANG_PAIRS[0]);
  const [pages, setPages] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const Icon = ICONS[product.id] || PenLine;

  const totalPrice = BASE_PRICE * pages;
  const formatPrice = (p: number) => p.toFixed(2).replace(".", ",") + " €";

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: totalPrice,
      badge: product.badge,
      langPair,
      pages,
    });
    toast({
      title: `${product.name} ajouté`,
      description: `${pages} page${pages > 1 ? "s" : ""} · ${langPair} · ${formatPrice(totalPrice)}`,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="product-card group relative flex flex-col overflow-hidden rounded-[20px] border border-navy/7 bg-white p-6 shadow-[0_4px_32px_rgba(10,25,47,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/20 hover:shadow-[0_20px_48px_rgba(10,25,47,0.14)]">
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-orange to-orange-light transition-transform duration-300 group-hover:scale-x-100 rounded-t-[20px]" />

      {/* Icon + Badge row */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange transition-all group-hover:scale-105 group-hover:bg-orange/18">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="rounded-full bg-navy/6 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
          {product.badge}
        </span>
      </div>

      {/* Title + desc */}
      <h3 className="mb-1.5 font-serif text-[18px] font-bold leading-snug text-navy">
        {product.name}
      </h3>
      <p className="mb-5 flex-1 text-[13px] leading-relaxed text-slate-400">
        {product.desc}
      </p>

      {/* ── CONFIGURATOR ── */}
      <div className="mb-5 space-y-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">

        {/* Language pair selector */}
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Paire de langues
          </label>
          <div className="relative">
            <select
              value={langPair}
              onChange={(e) => setLangPair(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 pr-8 text-sm font-medium text-navy outline-none transition-colors focus:border-orange cursor-pointer"
            >
              {LANG_PAIRS.map((lp) => (
                <option key={lp} value={lp}>{lp}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* Page count */}
        <div>
          <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Nombre de pages
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPages((p) => Math.max(1, p - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-orange/40 hover:text-orange"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-bold text-navy">{pages}</span>
            <button
              onClick={() => setPages((p) => Math.min(20, p + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors hover:border-orange/40 hover:text-orange"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
            <span className="ml-1 text-xs text-slate-400">
              × {formatPrice(BASE_PRICE)} / page
            </span>
          </div>
        </div>
      </div>

      {/* Live price */}
      <div className="mb-4 flex items-baseline justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-bold text-navy">
            {formatPrice(totalPrice)}
          </span>
          <span className="text-xs text-slate-400">TTC</span>
        </div>
        {pages > 1 && (
          <span className="text-xs text-slate-400">
            {pages} pages × {formatPrice(BASE_PRICE)}
          </span>
        )}
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-px active:translate-y-0",
          added
            ? "bg-emerald-600"
            : "bg-navy hover:bg-orange hover:shadow-[0_4px_20px_rgba(245,124,0,0.3)]"
        )}
      >
        {added ? (
          <><Check className="h-3.5 w-3.5" />Ajouté !</>
        ) : (
          <><ShoppingCart className="h-3.5 w-3.5" />Ajouter au Panier</>
        )}
      </button>
    </article>
  );
}
