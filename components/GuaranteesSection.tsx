import { RefreshCw, Shield, Lock, Clock } from "lucide-react";

const items = [
  { icon: RefreshCw, title:"Reprise gratuite",     desc:"Si votre traduction est refusée par une administration pour une erreur de notre part, nous la refaisons intégralement et gratuitement." },
  { icon: Shield,    title:"Conformité RGPD",       desc:"Vos documents sont traités dans le respect strict du RGPD. Connexion SSL, aucune revente de données, suppression sous 30 jours." },
  { icon: Lock,      title:"Paiement sécurisé",     desc:"Règlement par carte via Stripe 3D Secure. Vos coordonnées bancaires ne transitent jamais sur nos serveurs." },
  { icon: Clock,     title:"Livraison 48h garantie",desc:"Votre traduction certifiée PDF vous est envoyée par email dans un délai maximal de 48 heures ouvrées." },
];

export function GuaranteesSection() {
  return (
    <section className="bg-navy py-16 px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Nos engagements</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">Commandé avec confiance</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/8 bg-white/4 p-6 hover:border-gold/30 hover:bg-white/7 transition-all">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Trust icons row */}
        <div className="mt-12 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label:"Traduction assermentée", sub:"Au format PDF" },
            { label:"Validité France & Étranger", sub:"Reconnue partout" },
            { label:"Livraison sous 48h", sub:"Par email en PDF" },
            { label:"Paiement sécurisé", sub:"SSL · Stripe" },
          ].map(({ label, sub }) => (
            <div key={label}>
              <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
              <div className="text-xs text-white/40">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
