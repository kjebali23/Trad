import { ClipboardList, Upload, CreditCard, PhoneCall } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    label: "Choisir le service",
  },
  {
    num: "02",
    icon: Upload,
    label: "Envoyer le PDF",
  },
  {
    num: "03",
    icon: CreditCard,
    label: "Paiement sécurisé",
  },
  {
    num: "04",
    icon: PhoneCall,
    label: "Recevoir la traduction",
  },
];

export function ProcessBar() {
  return (
    <div className="relative overflow-hidden bg-orange px-6 py-12">
      {/* Subtle overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/6 to-transparent" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.num} className="group relative flex flex-col items-center text-center">
              {/* Vertical divider on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-12 w-px -translate-y-1/2 bg-white/25 md:block" />
              )}

              <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition-all group-hover:-translate-y-1 group-hover:bg-white/25">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Étape {step.num}
              </p>
              <p className="text-[15px] font-semibold text-white leading-snug">
                {step.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
