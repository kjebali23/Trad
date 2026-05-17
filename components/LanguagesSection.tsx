const LANGUAGES = [
  { flag:"🇬🇧", name:"Anglais",     pair:"FR ↔ EN" },
  { flag:"🇸🇦", name:"Arabe",       pair:"FR ↔ AR" },
  { flag:"🇪🇸", name:"Espagnol",    pair:"FR ↔ ES" },
  { flag:"🇩🇪", name:"Allemand",    pair:"FR ↔ DE" },
  { flag:"🇮🇹", name:"Italien",     pair:"FR ↔ IT" },
  { flag:"🇵🇹", name:"Portugais",   pair:"FR ↔ PT" },
  { flag:"🇹🇷", name:"Turc",        pair:"FR ↔ TR" },
  { flag:"🇷🇺", name:"Russe",       pair:"FR ↔ RU" },
  { flag:"🇨🇳", name:"Chinois",     pair:"FR ↔ ZH" },
  { flag:"🇳🇱", name:"Néerlandais", pair:"FR ↔ NL" },
  { flag:"🇬🇷", name:"Grec",        pair:"FR ↔ EL" },
  { flag:"🇯🇵", name:"Japonais",    pair:"FR ↔ JA" },
  { flag:"🇵🇱", name:"Polonais",    pair:"FR ↔ PL" },
  { flag:"🇷🇴", name:"Roumain",     pair:"FR ↔ RO" },
  { flag:"🇦🇱", name:"Albanais",    pair:"FR ↔ SQ" },
  { flag:"🇷🇸", name:"Serbe",       pair:"FR ↔ SR" },
  { flag:"🇻🇳", name:"Vietnamien",  pair:"FR ↔ VI" },
  { flag:"🇰🇷", name:"Coréen",      pair:"FR ↔ KO" },
  { flag:"🇸🇪", name:"Suédois",     pair:"FR ↔ SV" },
  { flag:"🇭🇺", name:"Hongrois",    pair:"FR ↔ HU" },
];

export function LanguagesSection() {
  return (
    <section id="languages" className="bg-[#f9f7f2] py-16 px-6 border-y border-gold/10">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Langues disponibles</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">Plus de 20 langues couvertes</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
            Une paire manquante ? Contactez-nous pour un devis personnalisé.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {LANGUAGES.map(({ flag, name, pair }) => (
            <div key={name}
              className="group flex items-center gap-3 rounded-xl border border-gold/10 bg-white px-4 py-3 hover:border-gold/40 hover:shadow-md transition-all cursor-default">
              <span className="text-2xl leading-none">{flag}</span>
              <div>
                <div className="text-sm font-semibold text-navy">{name}</div>
                <div className="text-[11px] font-mono text-gray-400 group-hover:text-gold transition-colors">{pair}</div>
              </div>
            </div>
          ))}
          <a href="/devis"
            className="group flex items-center gap-3 rounded-xl border border-dashed border-gold/30 bg-gold/5 px-4 py-3 hover:border-gold hover:bg-gold/10 transition-all">
            <span className="text-2xl leading-none">➕</span>
            <div>
              <div className="text-sm font-semibold text-gold">Autre langue</div>
              <div className="text-[11px] text-gold/60 group-hover:text-gold transition-colors">Sur devis</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
