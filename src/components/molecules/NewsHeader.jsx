import Button from "../atoms/Button";

export default function NewsHeader({ title, children }) {
  return (
    <div className="flex flex-col items-center text-center gap-y-[10px]">
      <Button className="py-4 px-[46px]" variant="logoPrimary">
        News
      </Button>
      <h2 className="font-medium text-[28px] text-black100 md:text-[38px] lg:text-[48px]">
        {title}
      </h2>
      <p className="text-black20 text-sm md:text-lg lg:font-medium">
        {children}
      </p>
    </div>
  );
}
