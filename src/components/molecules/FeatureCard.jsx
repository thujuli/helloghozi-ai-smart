export default function FeatureCard({ children, name, imgSrc, imgAlt, bgImg }) {
  return (
    <div className="flex flex-col gap-y-[15px] col-span-1">
      <div
        className={`w-[65px] h-[65px] rounded-[15px] flex items-center justify-center ${bgImg}`}
      >
        <img src={imgSrc} alt={imgAlt} className="w-11 h-11" />
      </div>
      <h3 className="text-black100 text-[18px] font-medium lg:text-2xl">
        {name}
      </h3>
      <p className="text-sm text-black20 lg:text-[18px]">{children}</p>
    </div>
  );
}
