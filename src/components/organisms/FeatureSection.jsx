import FeatureCard from "../molecules/FeatureCard";
import FeatureHeader from "../molecules/FeatureHeader";
import icSell from "../../assets/img/ic-sell.svg";
import icStar from "../../assets/img/ic-star.svg";
import icCloud from "../../assets/img/ic-cloud.svg";

const features = [
  {
    id: 1,
    name: "Create command",
    desc: "Enables users to locate solutions to their inquiries without browsing numerous resources.",
    imgSrc: icSell,
    imgAlt: "Sell Icon",
    bgImg: "bg-blue100",
  },
  {
    id: 2,
    name: "Improve everyday",
    desc: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    imgSrc: icStar,
    imgAlt: "Star Icon",
    bgImg: "bg-orange100",
  },
  {
    id: 3,
    name: "Connect everywhere",
    desc: "Connect with the AI tool from anywhere, on any device, making it more accessible and convenient.",
    imgSrc: icCloud,
    imgAlt: "Cloud Icon",
    bgImg: "bg-green100",
  },
  {
    id: 4,
    name: "Create command",
    desc: "Enables users to locate solutions to their inquiries without browsing numerous resources.",
    imgSrc: icCloud,
    imgAlt: "Cloud Icon",
    bgImg: "bg-green100",
  },
  {
    id: 5,
    name: "Improve everyday",
    desc: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    imgSrc: icSell,
    imgAlt: "Sell Icon",
    bgImg: "bg-blue100",
  },
  {
    id: 6,
    name: "Connect everywhere",
    desc: "Connect with the AI tool from anywhere, on any device, making it more accessible and convenient.",
    imgSrc: icStar,
    imgAlt: "Star Icon",
    bgImg: "bg-orange100",
  },
];

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[100px] px-5 gap-y-[50px] md:px-10 lg:px-[100px] ">
      <FeatureHeader title="More Features">
        These are a few of the key features of AITool that distinguish it from
        other AI platforms
      </FeatureHeader>
      <div className="grid gap-y-[30px] md:grid-cols-3 md:gap-x-[30px] md:gap-y-[50px]">
        {features.map(({ id, desc, imgAlt, imgSrc, name, bgImg }) => (
          <FeatureCard
            key={id}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            name={name}
            bgImg={bgImg}
          >
            {desc}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}
