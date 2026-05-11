import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrderTracker } from "@/components/OrderTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suivi de commande — CertifyTrad",
  description: "Suivez l'avancement de votre traduction certifiée en temps réel.",
};

export default function SuiviPage() {
  return (
    <>
      <Header />
      <main>
        <OrderTracker />
      </main>
      <Footer />
    </>
  );
}
