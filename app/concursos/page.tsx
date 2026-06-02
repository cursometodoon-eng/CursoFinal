import { HeroSection } from "@/components/concursos/hero-section";
import { AttentionSection } from "@/components/concursos/attention-section";
import { BenefitsSection } from "@/components/concursos/benefits-section";
import { PricingSection } from "@/components/concursos/pricing-section";
import { Footer } from "@/components/concursos/footer";

export default function ConcursosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <BenefitsSection />
      <AttentionSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
