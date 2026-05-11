import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export function ProductsSection() {
  return (
    <section id="products" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
              Documents
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-navy lg:text-[42px]">
              Documents les plus demandés
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-slate-500">
              Traductions certifiées pour vos documents officiels, reconnues par les autorités françaises et européennes.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">Prix indicatif par document</p>
            <p className="mt-0.5 text-[10px] text-slate-300">*TVA incluse</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
