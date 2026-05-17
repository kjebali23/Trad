"use client";
import * as React from "react";
import { ChevronDown, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { toast } from "@/components/ui/use-toast";
import { type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const LANG_PAIRS = [
  "Français → Anglais","Français → Arabe","Français → Espagnol",
  "Français → Allemand","Français → Italien","Français → Portugais",
  "Français → Turc","Français → Russe","Français → Chinois",
  "Arabe → Français","Anglais → Français","Espagnol → Français",
];

const DOC_IMAGES: Record<number, string> = {
  1:  "https://images.unsplash.com/photo-1568675975048-88d96a2a44f5?w=600&q=80",
  2:  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  3:  "https://images.unsplash.com/photo-1611760561498-4e3f9a06f35c?w=600&q=80",
  4:  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80",
  5:  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
  6:  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  7:  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  8:  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  9:  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  10: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  11: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  12: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
};

const BASE = 35;

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();
  const [lang, setLang] = React.useState(LANG_PAIRS[0]);
  const [pages, setPages] = React.useState(1);
  const [added, setAdded] = React.useState(false);
  const total = BASE * pages;
  const fmt = (p: number) => p.toFixed(2).replace(".", ",") + " €";

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: total, badge: product.badge, langPair: lang, pages });
    toast({ title: `${product.name} ajouté`, description: `${pages} page${pages>1?"s":""} · ${lang} · ${fmt(total)}` });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const img = DOC_IMAGES[product.id] || DOC_IMAGES[1];

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img src={img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold border border-gold/50 bg-black/20 backdrop-blur-sm rounded px-2 py-0.5">{product.badge}</span>
        </div>
        <div className="absolute top-3 right-3 bg-gold text-white text-xs font-bold rounded-full px-2.5 py-1">{fmt(BASE)}/page</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-base font-bold text-navy mb-1 leading-snug uppercase">Traduction {product.name}</h3>
        <p className="text-xs text-gray-400 mb-4 leading-relaxed flex-1">{product.desc}</p>
        <div className="space-y-3 mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
          <div className="relative">
            <select value={lang} onChange={e => setLang(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-navy outline-none focus:border-gold cursor-pointer pr-7">
              {LANG_PAIRS.map(l => <option key={l}>{l}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-medium">Nombre de pages</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setPages(p => Math.max(1, p-1))} className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:border-gold/50 hover:text-gold transition-colors"><Minus className="h-3 w-3" /></button>
              <span className="w-5 text-center text-sm font-bold text-navy">{pages}</span>
              <button onClick={() => setPages(p => Math.min(20, p+1))} className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:border-gold/50 hover:text-gold transition-colors"><Plus className="h-3 w-3" /></button>
            </div>
          </div>
        </div>
        <div className="flex items-baseline justify-between mb-3">
          <span className="font-serif text-2xl font-bold text-navy">{fmt(total)}</span>
          {pages > 1 && <span className="text-xs text-gray-400">{pages}p × {fmt(BASE)}</span>}
        </div>
        <button onClick={handleAdd} className={cn("w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all", added ? "bg-green-600 text-white" : "bg-navy text-white hover:bg-gold")}>
          {added ? <><Check className="h-3.5 w-3.5" />Ajouté !</> : <><ShoppingCart className="h-3.5 w-3.5" />Ajouter au panier</>}
        </button>
      </div>
    </div>
  );
}
