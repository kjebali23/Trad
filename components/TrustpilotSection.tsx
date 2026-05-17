import { Star } from "lucide-react";

const REVIEWS = [
  { name:"Sophie M.",    rating:5, date:"Il y a 2 jours",    doc:"Acte de naissance",    text:"Traduction reçue en moins de 24h, impeccable. Acceptée du premier coup par la préfecture. Je recommande vivement !" },
  { name:"Karim B.",     rating:5, date:"Il y a 5 jours",    doc:"Diplôme universitaire", text:"Service rapide et professionnel. Le document a été accepté par l'université britannique sans aucun problème." },
  { name:"Laura T.",     rating:5, date:"Il y a 1 semaine",  doc:"Permis de conduire",   text:"Excellent service ! Traduction certifiée reçue en 48h comme promis. PDF parfaitement lisible et tamponné." },
  { name:"Ahmed S.",     rating:5, date:"Il y a 2 semaines", doc:"Acte de mariage",      text:"Très satisfait. La traduction a été acceptée par le consulat du Maroc sans remarque. Prix honnête." },
  { name:"Marie-Claire", rating:5, date:"Il y a 3 semaines", doc:"Extrait de casier",    text:"Simple, rapide, efficace. J'ai reçu ma traduction assermentée le lendemain. Parfait pour mes démarches." },
  { name:"Thomas W.",    rating:4, date:"Il y a 1 mois",     doc:"Relevé de notes",      text:"Bonne expérience globale. Délai tenu, traducteur assermenté, document tamponné. Je referai appel à ce service." },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`flex h-5 w-5 items-center justify-center ${i < n ? "bg-[#00b67a]" : "bg-gray-200"}`}>
          <Star className="h-3 w-3 fill-white text-white" />
        </div>
      ))}
    </div>
  );
}

export function TrustpilotSection() {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Avis clients</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy mb-4">Ce que disent nos clients</h2>

          {/* Global rating */}
          <a href="https://fr.trustpilot.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 hover:shadow-md transition-all">
            <div className="text-left">
              <div className="text-3xl font-bold text-navy font-serif">4.9</div>
              <div className="text-xs text-gray-400">778 avis</div>
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex h-6 w-6 items-center justify-center bg-[#00b67a]">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-[#00b67a]">Excellent</div>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <div className="text-lg font-bold text-[#00b67a]">Trustpilot</div>
              <div className="text-xs text-gray-400">Avis vérifiés</div>
            </div>
          </a>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="flex items-start justify-between mb-3">
                <Stars n={r.rating} />
                <span className="text-[11px] text-gray-400">{r.date}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-navy">{r.name}</div>
                  <div className="text-[11px] text-gold">{r.doc}</div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">
                  {r.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="https://fr.trustpilot.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#00b67a] px-6 py-3 text-sm font-semibold text-[#00b67a] hover:bg-[#00b67a] hover:text-white transition-all">
            Voir tous les avis sur Trustpilot →
          </a>
        </div>
      </div>
    </section>
  );
}
