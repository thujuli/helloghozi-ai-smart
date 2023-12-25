import Button from "../atoms/Button";

export default function NewsCard({
  imgSrc,
  imgAlt,
  title,
  children,
  timestamp,
}) {
  return (
    <div className="flex flex-col gap-y-5 rounded-[20px] border border-black10 p-5 col-span-1">
      <img src={imgSrc} alt={imgAlt} className="rounded-[20px] h-[266px]" />
      <div className="flex flex-col gap-y-[11px] ">
        <p className="text-primary100 text-lg ">New</p>
        <h3 className="text-black100 font-medium text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="text-black20 text-sm">{children}</p>
      </div>
      <div className="flex justify-between items-center gap-x-[10px] md:gap-x-5">
        <p className="text-black50 text-sm flex-none">{timestamp}</p>
        <Button variant="logo" className="py-4 w-full flex-grow">
          Read Now
        </Button>
      </div>
    </div>
  );
}
