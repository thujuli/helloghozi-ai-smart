import Button from "../atoms/Button";
import illMdHero from "../../assets/img/illustration-md-hero.png";
import illLgHero from "../../assets/img/illustration-lg-hero.png";
import HomeHeroCard from "../molecules/HomeHeroCard";

export default function HomePageHero() {
  return (
    <section className="max-w-7xl mx-auto py-[100px] px-5 md:px-10 lg:px-[50px] overflow-hidden">
      <div className="bg-black100 flex rounded-[70px] py-[100px] px-5 gap-x-5 items-center lg:flex-col lg:px-0 lg:pb-0 lg:pt-[100px] gap-y-[50px]">
        <img
          src={illMdHero}
          alt="Illustration Hero Section"
          className="hidden md:block md:max-h-[400px] lg:hidden"
        />
        <HomeHeroCard title="Explore Best Ai Tolls">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </HomeHeroCard>
        <img
          src={illLgHero}
          alt="Illustration Hero Section"
          className="hidden lg:block lg:max-w-full lg:px-[50px]"
        />
      </div>
    </section>
  );
}
