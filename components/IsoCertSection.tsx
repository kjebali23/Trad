export function IsoCertSection() {
  return (
    <section className="bg-navy py-16 px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Certifications</span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">Nous sommes certifiés ISO</h2>
          <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">
            Nos certifications internationales garantissent la qualité, la sécurité et la conformité de chaque traduction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ISO 9001 */}
          <div className="group rounded-2xl border border-white/8 bg-white/4 p-8 hover:border-gold/30 hover:bg-white/7 transition-all text-center flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer ring */}
                <circle cx="60" cy="60" r="58" stroke="#B8962E" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="60" r="50" stroke="#B8962E" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
                {/* Background fill */}
                <circle cx="60" cy="60" r="56" fill="#0D1B3E"/>
                {/* ISO text */}
                <text x="60" y="42" textAnchor="middle" fill="#B8962E" fontSize="11" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="4">ISO</text>
                {/* Big number */}
                <text x="60" y="72" textAnchor="middle" fill="white" fontSize="26" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="-1">9001</text>
                {/* Bottom label */}
                <text x="60" y="90" textAnchor="middle" fill="#B8962E" fontSize="7" fontFamily="Georgia,serif" letterSpacing="2">CERTIFIED</text>
                {/* Top arc decoration */}
                <path d="M 25 60 A 35 35 0 0 1 95 60" stroke="#B8962E" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
                {/* Stars decoration */}
                <text x="30" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
                <text x="85" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-1">ISO 9001</h3>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2.5 py-0.5 mb-3">Gestion de la qualité</span>
            <p className="text-sm text-white/50 leading-relaxed">Notre système de management de la qualité est certifié ISO 9001, garantissant des processus rigoureux à chaque étape de votre traduction.</p>
          </div>

          {/* ISO 27001 */}
          <div className="group rounded-2xl border border-white/8 bg-white/4 p-8 hover:border-gold/30 hover:bg-white/7 transition-all text-center flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="#B8962E" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="60" r="50" stroke="#B8962E" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
                <circle cx="60" cy="60" r="56" fill="#0D1B3E"/>
                <text x="60" y="42" textAnchor="middle" fill="#B8962E" fontSize="11" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="4">ISO</text>
                <text x="60" y="70" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="-1">27001</text>
                <text x="60" y="90" textAnchor="middle" fill="#B8962E" fontSize="7" fontFamily="Georgia,serif" letterSpacing="2">CERTIFIED</text>
                <path d="M 25 60 A 35 35 0 0 1 95 60" stroke="#B8962E" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
                {/* Shield icon hint */}
                <path d="M60 20 L68 24 L68 34 Q68 40 60 44 Q52 40 52 34 L52 24 Z" fill="none" stroke="#B8962E" strokeWidth="1.2" strokeOpacity="0.5"/>
                <text x="30" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
                <text x="85" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-1">ISO 27001</h3>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2.5 py-0.5 mb-3">Sécurité de l'information</span>
            <p className="text-sm text-white/50 leading-relaxed">Vos documents personnels sont protégés selon la norme ISO 27001. Transfert chiffré, accès restreint, conformité RGPD totale.</p>
          </div>

          {/* ISO 17100 */}
          <div className="group rounded-2xl border border-white/8 bg-white/4 p-8 hover:border-gold/30 hover:bg-white/7 transition-all text-center flex flex-col items-center">
            <div className="mb-5 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="58" stroke="#B8962E" strokeWidth="3" fill="none"/>
                <circle cx="60" cy="60" r="50" stroke="#B8962E" strokeWidth="1" strokeOpacity="0.4" fill="none"/>
                <circle cx="60" cy="60" r="56" fill="#0D1B3E"/>
                <text x="60" y="42" textAnchor="middle" fill="#B8962E" fontSize="11" fontWeight="bold" fontFamily="Georgia,serif" letterSpacing="4">ISO</text>
                <text x="60" y="70" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="-1">17100</text>
                <text x="60" y="90" textAnchor="middle" fill="#B8962E" fontSize="7" fontFamily="Georgia,serif" letterSpacing="2">CERTIFIED</text>
                <path d="M 25 60 A 35 35 0 0 1 95 60" stroke="#B8962E" strokeWidth="1.5" strokeOpacity="0.3" fill="none"/>
                {/* Document lines hint */}
                <rect x="52" y="18" width="16" height="20" rx="2" fill="none" stroke="#B8962E" strokeWidth="1.2" strokeOpacity="0.5"/>
                <line x1="55" y1="23" x2="65" y2="23" stroke="#B8962E" strokeWidth="0.8" strokeOpacity="0.5"/>
                <line x1="55" y1="26" x2="65" y2="26" stroke="#B8962E" strokeWidth="0.8" strokeOpacity="0.5"/>
                <line x1="55" y1="29" x2="62" y2="29" stroke="#B8962E" strokeWidth="0.8" strokeOpacity="0.5"/>
                <text x="30" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
                <text x="85" y="63" fill="#B8962E" fontSize="8" opacity="0.6">✦</text>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-1">ISO 17100</h3>
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2.5 py-0.5 mb-3">Services de traduction</span>
            <p className="text-sm text-white/50 leading-relaxed">La norme internationale de référence pour les prestataires de services de traduction. Nos traducteurs sont tous certifiés conformes.</p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label:"Traduction assermentée", sub:"Format PDF certifié" },
            { label:"Valable France & Étranger", sub:"Reconnue partout" },
            { label:"Livraison sous 48h", sub:"Par email en PDF" },
            { label:"Paiement sécurisé", sub:"SSL · Stripe 3D Secure" },
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
