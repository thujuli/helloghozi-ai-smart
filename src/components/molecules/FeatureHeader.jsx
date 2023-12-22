export default function FeatureHeader({ title, children }) {
  return (
    <div className="text-center md:w-9/12 md:mx-auto lg:w-7/12">
      <h2 className="mb-[30px] text-black100 text-[28px] font-medium md:text-[38px] lg:[48px]">
        {title}
      </h2>
      <p className="text-sm text-black20 md:text-[18px] lg:font-medium">
        {children}
      </p>
    </div>
  );
}
