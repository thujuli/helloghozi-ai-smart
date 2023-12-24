import Button from "../atoms/Button";
import icSuccess from "../../assets/img/ic-success.svg";

export default function PricingCard({ name, price, benefits }) {
  return (
    <div className="col-span-1 flex flex-col bg-[#F6643B] px-[30px] py-10 rounded-[40px] md:justify-between">
      <div className="flex flex-col gap-y-5 mb-10 text-white md:justify-center">
        <h3 className="font-medium text-[28px]">{name}</h3>
        <p className="font-medium text-2xl">{price}</p>
        <ul className="flex flex-col gap-y-[15px]">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-lg">
              <img
                src={icSuccess}
                alt="Success Icon"
                className="inline-block mr-[10px] w-6 h-6"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="white" className="py-5 w-full">
        Browse Products
      </Button>
    </div>
  );
}
