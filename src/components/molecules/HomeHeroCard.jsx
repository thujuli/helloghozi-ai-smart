import Button from "../atoms/Button";

export default function HomeHeroCard({ children, title }) {
  return (
    <div className="flex flex-col gap-y-[30px] lg:px-[150px]">
      <h5 className="font-medium text-[28px] text-center text-white md:text-[38px] md:text-start lg:text-center lg:text-[48px] ">
        {title}
      </h5>
      <p className="text-sm text-black10 text-center md:text-[18px] md:text-start lg:text-center lg:font-medium">
        {children}
      </p>
      <div className="flex flex-col items-center gap-y-5 md:items-start lg:flex-row lg:gap-x-5 lg:justify-center">
        <Button variant="logo" className="p-5 w-fit">
          Get Started Free
        </Button>
        <Button variant="outline" className="py-5 px-[33px] w-fit">
          Explore Feature
        </Button>
      </div>
    </div>
  );
}
