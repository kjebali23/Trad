"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Ma traduction sera-t-elle acceptée par la préfecture / le consulat ?",
    a: "Oui. Toutes nos traductions sont réalisées par des traducteurs assermentés inscrits auprès d'une Cour d'Appel française. Elles sont munies du cachet officiel et de la signature du traducteur, ce qui les rend juridiquement valables auprès de toutes les administrations françaises et étrangères.",
  },
  {
    q: "La version PDF est-elle suffisante ou dois-je recevoir un document papier ?",
    a: "Dans la grande majorité des cas, le PDF certifié suffit — c'est accepté par les préfectures, universités et consulats. Si une administration spécifique exige un original papier, contactez-nous via le formulaire de devis et nous arrangerons un envoi postal.",
  },
  {
    q: "Mon document fait plusieurs pages, comment est calculé le tarif ?",
    a: "Le prix est de 35 € par page du document original. Vous indiquez le nombre de pages directement sur la fiche produit et le total se calcule automatiquement avant l'ajout au panier. En cas de doute sur le décompte de pages, n'hésitez pas à nous envoyer votre document via le formulaire de devis.",
  },
  {
    q: "Que se passe-t-il si ma traduction est refusée par une administration ?",
    a: "Nous nous engageons sur la qualité de nos traductions. En cas de refus imputable à une erreur de notre part, nous refaisons la traduction gratuitement. Contactez-nous en joignant le justificatif de refus et nous traitons votre demande en priorité.",
  },
  {
    q: "Mes documents sont-ils en sécurité ?",
    a: "Absolument. Vos documents sont transmis via une connexion SSL chiffrée et traités dans le respect strict du RGPD. Ils ne sont jamais partagés à des tiers et sont automatiquement supprimés de nos serveurs 30 jours après livraison.",
  },
  {
    q: "Quels formats de document puis-je envoyer ?",
    a: "Nous acceptons les PDF (recommandé), JPEG et PNG. Pour une qualité optimale, envoyez un scan en haute résolution (300 dpi minimum). Un document illisible peut entraîner un délai supplémentaire pour vérification.",
  },
  {
    q: "Puis-je commander une traduction pour un document qui n'est pas dans votre catalogue ?",
    a: "Oui — actes notariaux, contrats, relevés bancaires, extrait Kbis, jugements... Utilisez notre formulaire « Demander un devis » en décrivant votre document et nous vous répondons sous 2h ouvrées.",
  },
  {
    q: "Vers quelles langues traduisez-vous ?",
    a: "Nous couvrons plus de 20 langues : anglais, arabe, espagnol, allemand, italien, portugais, turc, russe, chinois, néerlandais, grec, japonais, polonais, roumain, albanais, serbe, vietnamien, coréen, et d'autres sur demande.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={cn(
      "rounded-2xl border transition-all duration-200",
      isOpen ? "border-orange/25 bg-orange/3" : "border-navy/8 bg-white hover:border-navy/15"
    )}>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={cn("text-[15px] font-semibold leading-snug transition-colors", isOpen ? "text-orange" : "text-navy")}>
          {q}
        </span>
        <ChevronDown className={cn(
          "mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300",
          isOpen ? "rotate-180 text-orange" : "text-slate-400"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{a}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
            Questions fréquentes
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy lg:text-[42px]">
            Tout ce que vous devez savoir
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Une question sans réponse ici ? Utilisez notre formulaire de devis et nous vous répondons sous 2h.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-3">
          {/* Left column */}
          <div className="space-y-3">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="space-y-3">
            {FAQS.slice(4).map((faq, i) => (
              <FaqItem
                key={i + 4}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i + 4}
                onToggle={() => setOpenIndex(openIndex === i + 4 ? null : i + 4)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-orange/20 bg-orange/5 px-6 py-5">
          <div className="flex-1">
            <p className="font-semibold text-navy">Vous ne trouvez pas votre réponse ?</p>
            <p className="text-sm text-slate-500 mt-0.5">Décrivez votre besoin, nous vous répondons sous 2h ouvrées.</p>
          </div>
          <a
            href="/devis"
            className="shrink-0 rounded-xl bg-orange px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-light hover:-translate-y-px"
          >
            Demander un devis →
          </a>
        </div>
      </div>
    </section>
  );
}
