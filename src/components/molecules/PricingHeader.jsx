export default function PricingHeader({ title, children }) {
  return (
    <div className="text-center md:w-8/12 md:mx-auto">
      <h2 className="mb-5 font-medium text-black100 text-[28px] md:text-[38px] lg:text-[48px]">
        {title}
      </h2>
      <p className="text-sm text-black20 md:text-lg">{children}</p>
    </div>
  );
}
