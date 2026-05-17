import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const serviceLinks = ["Actes civils","Diplômes","Documents juridiques","Permis de conduire","Acte de mariage","Extrait de casier","Relevé de notes"];
const infoLinks = [
  { label:"Suivi de commande", href:"/suivi" },
  { label:"Demander un devis", href:"/devis" },
  { label:"FAQ",               href:"#faq" },
  { label:"Blog",              href:"#blog" },
  { label:"Contact",           href:"/devis" },
];
const legalLinks = [
  { label:"CGV",                    href:"#" },
  { label:"Conditions d'utilisation",href:"#" },
  { label:"Mentions légales",       href:"#" },
  { label:"Politique de confidentialité", href:"#" },
  { label:"Plan du site",           href:"#" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-screen-xl px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Global Beglaubigung" width={180} height={54} className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              Service de traduction officielle certifiée par des traducteurs assermentés agréés auprès des Cours d'Appel françaises.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <a href="tel:+33187665103" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="h-4 w-4 text-gold" />(00) 875 784 5682
              </a>
              <a href="mailto:info@globalbeglaubigung.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="h-4 w-4 text-gold" />info@globalbeglaubigung.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />238, Arimantab, Moska – USA.
              </span>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 hover:bg-gold transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/8 hover:bg-gold transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l}><a href="#services" className="text-sm text-white/50 hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Informations</h4>
            <ul className="space-y-2">
              {infoLinks.map(({ label, href }) => (
                <li key={label}><a href={href} className="text-sm text-white/50 hover:text-gold transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Conditions</h4>
            <ul className="space-y-2">
              {legalLinks.map(({ label, href }) => (
                <li key={label}><a href={href} className="text-sm text-white/50 hover:text-gold transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-6" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/30">
          <span>© 2025 <strong className="text-gold">Global Beglaubigung</strong>. Tous droits réservés.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gold transition-colors">CGV</a>
            <a href="#" className="hover:text-gold transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
