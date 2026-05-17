// ML Traduction shows 5 company tiles. Based on their design style we render
// the same well-known French companies with faithful brand colors.

export function TrustedBySection() {
  return (
    <section className="bg-[#f9f7f2] py-14 px-6 border-y border-gold/10 overflow-hidden">
      <div className="mx-auto max-w-screen-xl">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-navy">
            Plus de <span className="text-gold">1 500 entreprises</span> nous font confiance
          </h2>
        </div>

        {/* Infinite scroll strip */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#f9f7f2] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#f9f7f2] to-transparent" />

          {/* Two copies for seamless loop */}
          <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-5">
            {[...Array(2)].map((_, set) => (
              <div key={set} className="flex gap-5">

                {/* Société Générale */}
                <div className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                  <svg viewBox="0 0 180 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="8" width="38" height="38" rx="4" fill="#E30613"/>
                    <text x="19" y="33" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif">SG</text>
                    <text x="48" y="28" fill="#1a1a1a" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif">Société</text>
                    <text x="48" y="46" fill="#E30613" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif">Générale</text>
                  </svg>
                </div>

                {/* BNP Paribas */}
                <div className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                  <svg viewBox="0 0 180 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="8" width="14" height="14" rx="2" fill="#009966"/>
                    <rect x="16" y="8" width="14" height="14" rx="2" fill="#009966"/>
                    <rect x="0" y="24" width="14" height="14" rx="2" fill="#009966"/>
                    <rect x="16" y="24" width="14" height="14" rx="2" fill="none" stroke="#009966" strokeWidth="2"/>
                    <text x="38" y="26" fill="#009966" fontSize="14" fontWeight="900" fontFamily="Arial,sans-serif">BNP</text>
                    <text x="38" y="44" fill="#1a1a1a" fontSize="12" fontFamily="Arial,sans-serif">PARIBAS</text>
                  </svg>
                </div>

                {/* Crédit Agricole */}
                <div className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                  <svg viewBox="0 0 180 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="18,6 36,38 0,38" fill="#008751"/>
                    <text x="44" y="28" fill="#008751" fontSize="14" fontWeight="900" fontFamily="Arial,sans-serif">Crédit</text>
                    <text x="44" y="46" fill="#1a1a1a" fontSize="13" fontFamily="Arial,sans-serif">Agricole</text>
                  </svg>
                </div>

                {/* Orange */}
                <div className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                  <svg viewBox="0 0 140 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="8" width="40" height="40" rx="6" fill="#F16E00"/>
                    <text x="20" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif">orange</text>
                    <text x="50" y="36" fill="#F16E00" fontSize="22" fontWeight="900" fontFamily="Arial,sans-serif">orange</text>
                  </svg>
                </div>

                {/* TotalEnergies */}
                <div className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-5 shadow-sm">
                  <svg viewBox="0 0 180 56" className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="14" width="9" height="28" rx="2" fill="#E4212B"/>
                    <rect x="11" y="14" width="9" height="28" rx="2" fill="#002F6C"/>
                    <rect x="22" y="14" width="9" height="28" rx="2" fill="#E4212B"/>
                    <text x="40" y="30" fill="#002F6C" fontSize="15" fontWeight="800" fontFamily="Arial,sans-serif">Total</text>
                    <text x="40" y="47" fill="#E4212B" fontSize="12" fontWeight="700" fontFamily="Arial,sans-serif">Energies</text>
                  </svg>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
