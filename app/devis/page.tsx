import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DevisForm } from "@/components/DevisForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un devis — CertifyTrad",
  description: "Obtenez un devis personnalisé pour vos documents hors catalogue.",
};

export default function DevisPage() {
  return (
    <>
      <Header />
      <main>
        <DevisForm />
      </main>
      <Footer />
    </>
  );
}
