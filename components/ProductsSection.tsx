import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

// Show only first 4 on homepage, "voir plus" → /services
const HOME_PRODUCTS = PRODUCTS.slice(0, 4);

export function ProductsSection() {
  return (
    <section id="services" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Nos services</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-3">
            Toutes nos traductions sont assermentées et certifiées
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Commandez en ligne simplement et rapidement. Livraison PDF sous 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {HOME_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* voir plus — links to /services page */}
        <div className="mt-8 text-center">
          <a href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-8 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-all">
            voir plus →
          </a>
        </div>

        {/* Devis CTA */}
        <div className="mt-8 rounded-2xl bg-navy px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Document introuvable ?</div>
            <h3 className="font-serif text-xl font-bold text-white">Vous ne trouvez pas votre document ?</h3>
            <p className="text-white/50 text-sm mt-1">Votre combinaison de langue n'est pas proposée ? Devis gratuit, réponse sous 30 minutes.</p>
          </div>
          <a href="/devis"
            className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white hover:bg-gold-light transition-all whitespace-nowrap shadow-[0_4px_16px_rgba(184,150,46,0.35)] hover:-translate-y-0.5">
            DEMANDEZ UN DEVIS →
          </a>
        </div>
      </div>
    </section>
  );
}
