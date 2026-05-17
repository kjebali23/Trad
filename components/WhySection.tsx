import { ShieldCheck, Clock, Award } from "lucide-react";

const reasons = [
  { icon:ShieldCheck, title:"Traducteurs Assermentés", desc:"Tous nos traducteurs sont officiellement assermentés auprès des Cours d'Appel françaises, garantissant la validité juridique de vos documents." },
  { icon:Clock,       title:"Délai Garanti 48h",       desc:"Nous nous engageons sur des délais précis. Votre traduction certifiée livrée par email en moins de 48 heures ouvrables." },
  { icon:Award,       title:"Certification ISO 17100", desc:"Notre processus de traduction est certifié ISO 17100, la norme internationale pour les services de traduction professionnels." },
];

export function WhySection() {
  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Pourquoi nous choisir</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">La qualité certifiée, sans compromis.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map(({ icon:Icon, title, desc }) => (
            <div key={title} className="group text-center p-8 rounded-2xl border border-gold/10 hover:border-gold/30 hover:shadow-lg transition-all">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/20 bg-gold/5 group-hover:bg-gold/10 group-hover:border-gold/50 transition-all">
                <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
