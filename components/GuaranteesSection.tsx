import { RefreshCw, Shield, Lock, Clock } from "lucide-react";

const GUARANTEES = [
  {
    icon: RefreshCw,
    title: "Reprise gratuite",
    desc: "Si votre traduction est refusée par une administration pour une erreur de notre part, nous la refaisons intégralement et gratuitement, sans délai.",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/15",
  },
  {
    icon: Shield,
    title: "Conformité RGPD",
    desc: "Vos documents personnels sont traités dans le respect strict du RGPD. Connexion SSL chiffrée, aucune revente de données, suppression automatique sous 30 jours.",
    accent: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/15",
  },
  {
    icon: Lock,
    title: "Paiement 100 % sécurisé",
    desc: "Règlement par carte bancaire via Stripe (3D Secure). Vos coordonnées bancaires ne transitent jamais sur nos serveurs.",
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/15",
  },
  {
    icon: Clock,
    title: "Livraison garantie 48h",
    desc: "Votre traduction certifiée vous est envoyée par email au format PDF dans un délai maximal de 48 heures ouvrées après réception de votre commande.",
    accent: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/15",
  },
];

export function GuaranteesSection() {
  return (
    <section className="bg-cream-dark px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange">
            Nos engagements
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-navy lg:text-[42px]">
            Commandé avec confiance
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500">
            Quatre garanties concrètes pour commander sans stress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map(({ icon: Icon, title, desc, accent, bg, border }) => (
            <div
              key={title}
              className={`group rounded-2xl border bg-white p-6 shadow-[0_2px_20px_rgba(10,25,47,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,25,47,0.12)] ${border}`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}>
                <Icon className={`h-5 w-5 ${accent}`} strokeWidth={1.8} />
              </div>
              <h3 className="mb-2 font-serif text-[17px] font-bold text-navy">{title}</h3>
              <p className="text-[13px] leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
