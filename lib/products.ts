export interface Product {
  id: number;
  name: string;
  badge: string;
  desc: string;
  price: number;
}

export const PRODUCTS: Product[] = [
  { id:1,  name:"Acte de naissance",       badge:"État civil",  desc:"Traduit et certifié pour toutes démarches administratives, consulaires et universitaires.",                               price:35 },
  { id:2,  name:"Diplôme Universitaire",   badge:"Éducation",   desc:"Certification officielle de vos diplômes pour équivalences, Masters et emplois à l'étranger.",                          price:35 },
  { id:3,  name:"Permis de conduire",      badge:"Transport",   desc:"Traduction homologuée pour l'échange de permis et les démarches de conduite à l'international.",                        price:35 },
  { id:4,  name:"Bulletin scolaire",       badge:"Éducation",   desc:"Traduction officielle pour candidatures à l'étranger et demandes de bourse.",                                           price:35 },
  { id:5,  name:"Acte de mariage",         badge:"État civil",  desc:"Traduction certifiée de votre acte de mariage pour regroupement familial, visa et démarches consulaires.",              price:35 },
  { id:6,  name:"Acte de divorce",         badge:"Juridique",   desc:"Traduction assermentée de jugement de divorce pour dossiers juridiques et démarches administratives.",                  price:35 },
  { id:7,  name:"Extrait de casier",       badge:"Juridique",   desc:"Traduction du casier judiciaire pour demandes d'emploi à l'étranger, visa et naturalisations.",                         price:35 },
  { id:8,  name:"Relevé de notes",         badge:"Éducation",   desc:"Traduction officielle pour candidatures universitaires, équivalences de diplômes et bourses internationales.",          price:35 },
  { id:9,  name:"Carte d'identité",        badge:"Identité",    desc:"Traduction certifiée de votre carte nationale d'identité ou passeport pour toutes démarches officielles.",             price:35 },
  { id:10, name:"Acte de décès",           badge:"État civil",  desc:"Traduction assermentée pour successions, démarches notariales et formalités consulaires.",                              price:35 },
  { id:11, name:"Contrat de travail",      badge:"Professionnel",desc:"Traduction certifiée pour travailleurs détachés, expatriés et recrutements internationaux.",                           price:35 },
  { id:12, name:"Extrait Kbis",            badge:"Entreprise",  desc:"Traduction officielle de votre extrait Kbis pour appels d'offres internationaux et partenariats étrangers.",           price:35 },
];
