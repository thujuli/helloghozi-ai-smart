import PricingCard from "../molecules/PricingCard";
import PricingHeader from "../molecules/PricingHeader";
import PricingToggle from "../molecules/PricingToggle";

const pricings = [
  {
    id: 1,
    name: "Regular",
    price: "$9/ Month",
    benefits: [
      "Access All Products",
      "Access Future Products",
      "Access to VIP Products",
      "Acces Basic Data",
    ],
  },
  {
    id: 2,
    name: "Basic",
    price: "$99/ Month",
    benefits: [
      "Access All Products",
      "Access Future Products",
      "Access to VIP Products",
      "Acces Basic Data",
    ],
  },
  {
    id: 3,
    name: "VIP Premium",
    price: "$999/ Month",
    benefits: [
      "Access All Products",
      "Access Future Products",
      "Access to VIP Products",
      "Acces Basic Data",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col py-[100px] px-5 gap-y-[50px] md:px-10 lg:px-[100px] ">
      <PricingHeader title="Princing">
        Begin employing AITool - AI technology today and feel the influence of
        AI in your worklife!
      </PricingHeader>
      <PricingToggle option1="Monthly" option2="Yearly" />
      <div className="grid gap-y-3 md:grid-cols-3 md:gap-x-3">
        {pricings.map(({ benefits, id, name, price }) => (
          <PricingCard key={id} benefits={benefits} name={name} price={price} />
        ))}
      </div>
    </section>
  );
}
