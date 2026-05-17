import { CheckCircle } from "lucide-react";

const points = [
  "Traductions reconnues par toutes les administrations françaises et étrangères",
  "Réalisées par des traducteurs interprètes officiels assermentés",
  "Valables en France comme à l'étranger",
  "Comportent le cachet et la signature du traducteur assermenté",
];

export function AboutStrip() {
  return (
    <section className="bg-[#f9f7f2] py-16 px-6 border-y border-gold/10">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image placeholder with gold frame */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80"
                alt="Traducteur assermenté au travail"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-navy/10" />
            </div>
            {/* Gold badge */}
            <div className="absolute -bottom-5 -right-5 flex h-28 w-28 items-center justify-center rounded-full bg-gold text-white text-center shadow-lg">
              <div>
                <div className="text-2xl font-bold font-serif leading-none">48H</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide mt-1 leading-tight">Livraison<br/>garantie</div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Notre engagement</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4 leading-snug">
              L'agence en ligne reconnue<br />et certifiée
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Toutes les traductions assermentées réalisées par Global Beglaubigung sont reconnues et validées par les administrations françaises et étrangères. Effectuées par nos professionnels qualifiés et expérimentés dans différentes langues.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className="h-4.5 w-4.5 h-5 w-5 text-gold shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white hover:bg-navy-light transition-colors">
              Je commande en ligne →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
