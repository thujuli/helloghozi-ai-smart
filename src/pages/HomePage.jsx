import BenefitSection from "../components/organisms/BenefitSection";
import FeatureSection from "../components/organisms/FeatureSection";
import HomeHeroSection from "../components/organisms/HomeHeroSection";
import PricingSection from "../components/organisms/PricingSection";
import GlobalTemplate from "../components/templates/GlobalTemplate";

export default function HomePage() {
  return (
    <GlobalTemplate>
      <HomeHeroSection />
      <FeatureSection />
      <BenefitSection />
      <PricingSection />
    </GlobalTemplate>
  );
}
