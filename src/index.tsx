import DemoSection from "@/components/sections/demo-section";
import FaqsSection from "@/components/sections/faqs-section";
import FeaturesSection from "@/components/sections/features-section";
import HeroSection from "@/components/sections/hero-section";
import PricingSection from "@/components/sections/pricing-section";
import Testimonials from "@/components/sections/testimonials-section";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

const Index = () => {
  return (
    <main className="antialiased font-geist">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <Testimonials />
      <PricingSection />
      <FaqsSection />
      <Footer />
    </main>
  );
};

export default Index;
