export function HeroSection() {
  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden bg-navy">
      {/* Background photo overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')] bg-cover bg-center bg-no-repeat opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />

      <div className="relative mx-auto max-w-screen-xl px-6 py-20 w-full">
        <div className="max-w-2xl">
          {/* Gold accent line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">Certifié & Assermenté</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] mb-6">
            Votre traduction<br />
            <span className="text-gold-light italic">assermentée en ligne</span><br />
            en moins de 48H
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Nous ne sommes pas seulement une agence de traduction. Quel que soit le destinataire de vos textes internationaux, nous vous garantissons la meilleure solution. Toutes les langues. Vous pouvez compter sur nous.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-white hover:bg-gold-light transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(184,150,46,0.4)]">
              Commander
            </a>
            <a href="/devis"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white hover:border-gold hover:text-gold transition-all">
              Demander un Devis
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: "48H", label: "Délai de livraison" },
              { value: "20+", label: "Langues couvertes" },
              { value: "1500+", label: "Entreprises clientes" },
              { value: "100%", label: "Assermentées" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-gold font-serif">{value}</div>
                <div className="text-xs text-white/50 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
