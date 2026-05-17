"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  { q:"Ma traduction sera-t-elle acceptée par la préfecture / le consulat ?", a:"Oui. Toutes nos traductions sont réalisées par des traducteurs assermentés inscrits auprès d'une Cour d'Appel française. Elles sont munies du cachet officiel et de la signature du traducteur, ce qui les rend juridiquement valables auprès de toutes les administrations françaises et étrangères." },
  { q:"La version PDF est-elle suffisante ou dois-je recevoir un document papier ?", a:"Dans la grande majorité des cas, le PDF certifié suffit — accepté par les préfectures, universités et consulats. Si une administration exige un original papier, contactez-nous via le formulaire de devis." },
  { q:"Mon document fait plusieurs pages, comment est calculé le tarif ?", a:"Le prix est de 35 € par page du document original. Vous indiquez le nombre de pages directement sur la fiche produit et le total se calcule automatiquement avant l'ajout au panier." },
  { q:"Que se passe-t-il si ma traduction est refusée par une administration ?", a:"Nous nous engageons sur la qualité de nos traductions. En cas de refus imputable à une erreur de notre part, nous refaisons la traduction gratuitement. Contactez-nous en joignant le justificatif de refus." },
  { q:"Mes documents sont-ils en sécurité ?", a:"Absolument. Vos documents sont transmis via une connexion SSL chiffrée et traités dans le respect strict du RGPD. Ils ne sont jamais partagés à des tiers et sont automatiquement supprimés de nos serveurs 30 jours après livraison." },
  { q:"Vers quelles langues traduisez-vous ?", a:"Nous couvrons plus de 20 langues : anglais, arabe, espagnol, allemand, italien, portugais, turc, russe, chinois, néerlandais, grec, japonais, polonais, roumain, albanais, serbe, vietnamien, coréen, et d'autres sur demande." },
  { q:"Puis-je commander une traduction pour un document hors catalogue ?", a:"Oui — actes notariaux, contrats, relevés bancaires, extrait Kbis, jugements... Utilisez notre formulaire « Demander un devis » en décrivant votre document et nous vous répondons sous 30 minutes." },
  { q:"Quels formats de document puis-je envoyer ?", a:"Nous acceptons les PDF (recommandé), JPEG et PNG. Pour une qualité optimale, envoyez un scan en haute résolution (300 dpi minimum)." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#f9f7f2] py-16 px-6 border-t border-gold/10">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Questions fréquentes</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">Tout ce que vous devez savoir</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {[FAQS.slice(0,4), FAQS.slice(4)].map((col, ci) => (
            <div key={ci} className="space-y-3">
              {col.map((faq, ri) => {
                const i = ci === 0 ? ri : ri + 4;
                const isOpen = open === i;
                return (
                  <div key={i} className={cn("rounded-xl border bg-white transition-all", isOpen ? "border-gold/30 shadow-sm" : "border-gray-100")}>
                    <button onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left">
                      <span className={cn("text-sm font-semibold leading-snug transition-colors", isOpen ? "text-gold" : "text-navy")}>
                        {faq.q}
                      </span>
                      <ChevronDown className={cn("mt-0.5 h-4 w-4 shrink-0 transition-transform", isOpen ? "rotate-180 text-gold" : "text-gray-400")} />
                    </button>
                    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}>
                      <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/devis" className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-white transition-all">
            Vous avez d'autres questions ? Contactez-nous →
          </a>
        </div>
      </div>
    </section>
  );
}
