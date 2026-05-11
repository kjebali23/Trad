import { ShieldCheck, Clock, Users, Lock } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Certifié ISO 17100" },
  { icon: Clock, label: "Livraison sous 48h" },
  { icon: Users, label: "+4 800 clients satisfaits" },
  { icon: Lock, label: "Paiement sécurisé" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-24 text-center lg:py-32">
      {/* Grid pattern */}
      <div className="hero-grid-pattern absolute inset-0 opacity-[0.04]" />

      {/* Radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-navy-light/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Label pill */}
        <div className="mb-8 inline-flex animate-[fadeUp_0.6s_ease_both] items-center gap-2 rounded-full border border-orange/25 bg-orange/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-orange-light">
          <span className="h-1.5 w-1.5 animate-[pulseDot_2s_infinite] rounded-full bg-orange-light" />
          ISO 17100 Certifié · Délai 48h
        </div>

        {/* H1 */}
        <h1 className="animate-[fadeUp_0.6s_0.1s_ease_both] mb-6 font-serif text-4xl font-bold leading-[1.15] tracking-[-1.5px] text-white opacity-0 [animation-fill-mode:both] lg:text-6xl">
          Traductions officielles<br />certifiées par des<br />
          <em className="italic text-orange-light not-italic">experts assermentés.</em>
        </h1>

        {/* Subheadline */}
        <p className="animate-[fadeUp_0.6s_0.2s_ease_both] mx-auto mb-11 max-w-xl text-base leading-relaxed text-white/70 opacity-0 [animation-fill-mode:both] lg:text-lg">
          Service de traduction juridiquement reconnue par des traducteurs assermentés agréés. Accepté dans tous les consulats, préfectures et universités.
        </p>

        {/* CTA Buttons */}
        <div className="animate-[fadeUp_0.6s_0.3s_ease_both] flex flex-wrap justify-center gap-3.5 opacity-0 [animation-fill-mode:both]">
          <a
            href="#products"
            className="rounded-xl bg-orange px-8 py-4 text-sm font-bold text-white shadow-[0_4px_24px_rgba(245,124,0,0.35)] transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-[0_8px_32px_rgba(245,124,0,0.45)]"
          >
            Commander Maintenant
          </a>
          <a
            href="/devis"
            className="rounded-xl border-[1.5px] border-white/30 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/6"
          >
            Demander un Devis
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-[fadeUp_0.6s_0.4s_ease_both] mt-14 flex flex-wrap justify-center gap-6 opacity-0 [animation-fill-mode:both]">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-white/70">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-orange-light">
                <Icon className="h-4 w-4" />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
