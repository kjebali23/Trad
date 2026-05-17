import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services — Global Beglaubigung",
  description: "Toutes nos traductions assermentées certifiées. Acte de naissance, diplôme, permis, mariage et plus encore. 35€/page, livraison 48h.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero strip */}
        <div className="bg-navy px-6 py-14 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Catalogue complet</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-white mb-3">Tous nos services de traduction</h1>
          <p className="text-white/60 max-w-lg mx-auto text-base">
            Traductions assermentées certifiées pour tous vos documents. 35 € par page · Livraison PDF sous 48h.
          </p>
        </div>

        {/* All products grid */}
        <section className="bg-white py-16 px-6">
          <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>

            {/* Devis CTA */}
            <div className="mt-10 rounded-2xl bg-navy px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Document introuvable ?</div>
                <h3 className="font-serif text-xl font-bold text-white">Votre combinaison de langue n'est pas proposée ?</h3>
                <p className="text-white/50 text-sm mt-1">Devis personnalisé et gratuit. Nous vous répondons sous 30 minutes.</p>
              </div>
              <a href="/devis" className="shrink-0 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-white hover:bg-gold-light transition-all whitespace-nowrap shadow-[0_4px_16px_rgba(184,150,46,0.35)] hover:-translate-y-0.5">
                DEMANDEZ UN DEVIS →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
