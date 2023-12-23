import illustration from "../../assets/img/illustration.png";
import icDiamond from "../../assets/img/ic-diamond.svg";
import icMedal from "../../assets/img/ic-medal.svg";
import icGrow from "../../assets/img/ic-grow.svg";
import BenefitCard from "../molecules/BenefitCard";

const benefits = [
  {
    id: 1,
    name: "Delightful user experience",
    bgImg: illustration,
    sub: [
      {
        id: 1,
        name: "Premium Acces",
        icon: icDiamond,
        bgColor: "bg-blueSky100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
      {
        id: 2,
        name: "Professional",
        icon: icMedal,
        bgColor: "bg-primary100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
      {
        id: 3,
        name: "Grow Trend",
        icon: icGrow,
        bgColor: "bg-violet100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
    ],
  },
  {
    id: 2,
    name: "Customization theme",
    bgImg: illustration,
    sub: [
      {
        id: 1,
        name: "Premium Acces",
        icon: icDiamond,
        bgColor: "bg-blueSky100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
      {
        id: 2,
        name: "Professional",
        icon: icMedal,
        bgColor: "bg-primary100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
      {
        id: 3,
        name: "Grow Trend",
        icon: icGrow,
        bgColor: "bg-violet100",
        description:
          "Enable both crypto and fiat payments on your self-hosted checkout page.",
      },
    ],
  },
];

export default function BenefitSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[100px] px-5 gap-y-[50px] md:px-10 lg:px-[100px] ">
      <div className="flex flex-col gap-y-[50px] lg:gap-[100px]">
        {benefits.map(({ id, bgImg, name, sub }) => (
          <BenefitCard key={id} bgImg={bgImg} name={name} sub={sub} id={id} />
        ))}
      </div>
    </section>
  );
}
