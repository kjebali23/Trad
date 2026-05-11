const LANGUAGES = [
  { flag: "🇬🇧", name: "Anglais",    pair: "FR ↔ EN" },
  { flag: "🇸🇦", name: "Arabe",      pair: "FR ↔ AR" },
  { flag: "🇪🇸", name: "Espagnol",   pair: "FR ↔ ES" },
  { flag: "🇩🇪", name: "Allemand",   pair: "FR ↔ DE" },
  { flag: "🇮🇹", name: "Italien",    pair: "FR ↔ IT" },
  { flag: "🇵🇹", name: "Portugais",  pair: "FR ↔ PT" },
  { flag: "🇹🇷", name: "Turc",       pair: "FR ↔ TR" },
  { flag: "🇷🇺", name: "Russe",      pair: "FR ↔ RU" },
  { flag: "🇨🇳", name: "Chinois",    pair: "FR ↔ ZH" },
  { flag: "🇳🇱", name: "Néerlandais",pair: "FR ↔ NL" },
  { flag: "🇬🇷", name: "Grec",       pair: "FR ↔ EL" },
  { flag: "🇯🇵", name: "Japonais",   pair: "FR ↔ JA" },
  { flag: "🇵🇱", name: "Polonais",   pair: "FR ↔ PL" },
  { flag: "🇷🇴", name: "Roumain",    pair: "FR ↔ RO" },
  { flag: "🇦🇱", name: "Albanais",   pair: "FR ↔ SQ" },
  { flag: "🇷🇸", name: "Serbe",      pair: "FR ↔ SR" },
  { flag: "🇻🇳", name: "Vietnamien", pair: "FR ↔ VI" },
  { flag: "🇰🇷", name: "Coréen",     pair: "FR ↔ KO" },
  { flag: "🇸🇪", name: "Suédois",    pair: "FR ↔ SV" },
  { flag: "🇭🇺", name: "Hongrois",   pair: "FR ↔ HU" },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="bg-navy px-6 py-20">
      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-light">
              Langues disponibles
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white lg:text-[42px]">
              Plus de 20 langues couvertes
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
              Nos traducteurs assermentés couvrent les principales langues du monde. Votre paire de langues n'est pas listée ? Demandez un devis.
            </p>
          </div>
          <a
            href="/devis"
            className="shrink-0 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:border-orange/60 hover:text-orange-light"
          >
            Autre langue ? →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {LANGUAGES.map(({ flag, name, pair }) => (
            <div
              key={name}
              className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3.5 transition-all hover:border-orange/30 hover:bg-white/7 cursor-default"
            >
              <span className="text-2xl leading-none">{flag}</span>
              <div>
                <div className="text-sm font-semibold text-white">{name}</div>
                <div className="text-[11px] font-mono text-slate-500 group-hover:text-orange-light transition-colors">{pair}</div>
              </div>
            </div>
          ))}
          {/* Custom request tile */}
          <a
            href="/devis"
            className="group flex items-center gap-3 rounded-2xl border border-dashed border-orange/25 bg-orange/5 px-4 py-3.5 transition-all hover:border-orange/50 hover:bg-orange/10"
          >
            <span className="text-2xl leading-none">➕</span>
            <div>
              <div className="text-sm font-semibold text-orange-light">Autre langue</div>
              <div className="text-[11px] text-orange/60 group-hover:text-orange transition-colors">Sur devis</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
