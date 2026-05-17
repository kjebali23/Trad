import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Global Beglaubigung — Traductions Officielles Certifiées",
  description: "Traductions assermentées certifiées en ligne. Livraison PDF en 48h. Acceptées par toutes les administrations françaises et étrangères.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
