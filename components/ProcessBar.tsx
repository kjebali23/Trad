import { ClipboardList, Upload, CreditCard, Mail } from "lucide-react";

const steps = [
  { num:"01", icon: ClipboardList, title:"Sélectionnez votre document", desc:"Choisissez le document, la combinaison de langues et le nombre de pages." },
  { num:"02", icon: Upload,        title:"Téléversez votre document",  desc:"Nous examinons votre fichier et confirmons la prise en charge par email." },
  { num:"03", icon: CreditCard,    title:"Payez en ligne",             desc:"Paiement 100% sécurisé par carte bancaire via Stripe (3D Secure)." },
  { num:"04", icon: Mail,          title:"Recevez votre traduction",   desc:"Livraison de votre traduction officielle par email en 48h au format PDF." },
];

export function ProcessBar() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-100">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Comment ça marche</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">Commandez en 4 étapes simples</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative text-center group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-50%] h-px bg-gold/20" />
                )}
                {/* Number + icon */}
                <div className="relative inline-flex">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/20 bg-gold/5 group-hover:bg-gold/10 group-hover:border-gold/50 transition-all mx-auto">
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[10px] font-bold text-white">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-[16px] font-bold text-navy leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
