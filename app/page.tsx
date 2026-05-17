import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessBar } from "@/components/ProcessBar";
import { AboutStrip } from "@/components/AboutStrip";
import { ProductsSection } from "@/components/ProductsSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { TrustpilotSection } from "@/components/TrustpilotSection";
import { IsoCertSection } from "@/components/IsoCertSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { WhySection } from "@/components/WhySection";
import { BlogSection } from "@/components/BlogSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessBar />
        <AboutStrip />
        <ProductsSection />
        <TrustedBySection />
        <TrustpilotSection />
        <IsoCertSection />
        <LanguagesSection />
        <WhySection />
        <BlogSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
