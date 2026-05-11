export interface Product {
  id: number;
  name: string;
  badge: string;
  desc: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Acte de naissance",
    badge: "État civil",
    desc: "Traduit et certifié pour toutes démarches administratives, consulaires et universitaires.",
    price: 35,
  },
  {
    id: 2,
    name: "Diplôme Universitaire",
    badge: "Éducation",
    desc: "Certification officielle de vos diplômes pour équivalences, Masters et emplois à l'étranger.",
    price: 35,
  },
  {
    id: 3,
    name: "Permis de conduire",
    badge: "Transport",
    desc: "Traduction homologuée pour l'échange de permis et les démarches de conduite à l'international.",
    price: 35,
  },
  {
    id: 4,
    name: "Bulletin scolaire",
    badge: "Éducation",
    desc: "Traduction officielle pour candidatures à l'étranger et demandes de bourse.",
    price: 35,
  },
];
