const POSTS = [
  { slug:"traduction-assermentee-prefecture", title:"Traduction assermentée préfecture : tout ce qu'il faut savoir", date:"12 mai 2025", cat:"Guide" },
  { slug:"mariage-etranger-france",           title:"Se marier avec un étranger en France — Le guide complet",     date:"8 mai 2025",  cat:"Démarches" },
  { slug:"double-nationalite-conditions",     title:"Double nationalité : tout savoir sur les conditions en France",date:"3 mai 2025",  cat:"Juridique" },
  { slug:"diplome-etranger-equivalence",      title:"Faire reconnaître un diplôme étranger en France — Démarches", date:"28 avr 2025", cat:"Éducation" },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-white py-16 px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Nos blogs</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">Ressources & actualités</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((post) => (
            <a key={post.slug} href="#"
              className="group block rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              {/* Placeholder image */}
              <div className="h-40 bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 rounded px-2 py-0.5">{post.cat}</span>
                  <span className="text-[10px] text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-serif text-sm font-bold text-navy leading-snug group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span className="mt-3 inline-block text-xs font-semibold text-gold group-hover:underline">Lire la suite →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
