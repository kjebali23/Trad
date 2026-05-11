import { ShieldCheck } from "lucide-react";

const serviceLinks = ["Actes civils", "Diplômes", "Documents juridiques", "Permis de conduire"];
const infoLinks = [
  { label: "Suivi de commande", href: "/suivi" },
  { label: "Demander un devis", href: "/devis" },
  { label: "FAQ", href: "#faq" },
  { label: "À Propos", href: "#about" },
];
const legalLinks = ["CGV", "Confidentialité", "Mentions légales"];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy px-6 pb-8 pt-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 font-serif text-xl font-bold text-white no-underline">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              CertifyTrad
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Service de traduction officielle certifiée par des traducteurs assermentés agréés auprès des Cours d'Appel françaises.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-orange-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Informations
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 transition-colors hover:text-orange-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Légal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="text-sm text-white/60 transition-colors hover:text-orange-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-7 text-[13px] text-white/40">
          <span>
            © 2025{" "}
            <strong className="text-orange-light font-semibold">CertifyTrad</strong>
            . Tous droits réservés.
          </span>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-orange-light">CGV</a>
            <a href="#" className="transition-colors hover:text-orange-light">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
