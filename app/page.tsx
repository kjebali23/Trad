import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessBar } from "@/components/ProcessBar";
import { ProductsSection } from "@/components/ProductsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { GuaranteesSection } from "@/components/GuaranteesSection";
import { WhySection } from "@/components/WhySection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessBar />
        <ProductsSection />
        <LanguagesSection />
        <GuaranteesSection />
        <WhySection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
