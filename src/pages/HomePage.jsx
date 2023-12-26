import BenefitSection from "../components/organisms/BenefitSection";
import FeatureSection from "../components/organisms/FeatureSection";
import HomeHeroSection from "../components/organisms/HomeHeroSection";
import NewsSection from "../components/organisms/NewsSection";
import PricingSection from "../components/organisms/PricingSection";
import TestimonialSection from "../components/organisms/TestimonialSection";
import GlobalTemplate from "../components/templates/GlobalTemplate";

export default function HomePage() {
  return (
    <GlobalTemplate>
      <HomeHeroSection />
      <FeatureSection />
      <BenefitSection />
      <PricingSection />
      <NewsSection />
      <TestimonialSection />
    </GlobalTemplate>
  );
}
