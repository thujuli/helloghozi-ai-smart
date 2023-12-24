import Button from "../atoms/Button";

export default function PricingToggle({ option1, option2 }) {
  return (
    <div className="flex rounded-full border-[1.5px] border-black10 py-[10px] px-[26px] justify-center gap-x-[50px] w-fit mx-auto">
      <Button className="px-5 py-4">{option1}</Button>
      <Button className="px-5 py-4" variant="white">
        {option2}
      </Button>
    </div>
  );
}
