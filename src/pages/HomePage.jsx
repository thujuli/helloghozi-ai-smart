import FeatureSection from "../components/organisms/FeatureSection";
import HomeHeroSection from "../components/organisms/HomeHeroSection";
import GlobalTemplate from "../components/templates/GlobalTemplate";

export default function HomePage() {
  return (
    <GlobalTemplate>
      <HomeHeroSection />
      <FeatureSection />
    </GlobalTemplate>
  );
}
