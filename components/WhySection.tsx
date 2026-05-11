import { ShieldCheck, Clock, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Traducteurs Assermentés",
    desc: "Tous nos traducteurs sont officiellement assermentés auprès des Cours d'Appel françaises, garantissant la validité juridique de vos documents.",
  },
  {
    icon: Clock,
    title: "Délai Garanti 48h",
    desc: "Nous nous engageons sur des délais précis. Votre traduction certifiée livrée par email en moins de 48 heures ouvrables.",
  },
  {
    icon: Award,
    title: "Certification ISO 17100",
    desc: "Notre processus de traduction est certifié ISO 17100, la norme internationale pour les services de traduction professionnels.",
  },
];

export function WhySection() {
  return (
    <section id="about" className="bg-navy px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-light">
            Pourquoi nous choisir
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white lg:text-[42px]">
            La qualité certifiée,<br />sans compromis.
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
            Nos traducteurs sont tous assermentés auprès des Cours d'Appel françaises et respectent les normes les plus strictes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-[20px] border border-white/8 bg-white/4 p-8 transition-all hover:border-orange/25 hover:bg-white/7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-orange-light">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mb-2.5 font-serif text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
