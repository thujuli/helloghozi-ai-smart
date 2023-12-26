export default function TestimonialCard({ name, children }) {
  return (
    <div className="py-[20px] px-[30px] rounded-[40px] border-2 border-black10 col-span-1">
      <h3 className="mb-5 font-medium text-2xl text-black100 md:text-lg lg:text-2xl">
        {name}
      </h3>
      <p className="text-lg text-black20 md:text-sm lg:text-lg">{children}</p>
    </div>
  );
}
