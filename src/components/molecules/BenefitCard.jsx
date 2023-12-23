export default function BenefitCard({ bgImg, name, sub, id }) {
  return (
    <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] lg:items-center">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={`h-[365px] bg-cover bg-center rounded-[20px] lg:h-[432px] lg:w-[325px] lg:flex-none ${
          id % 2 === 1 ? "lg:order-1" : "lg:order-2"
        }`}
      ></div>
      <div
        className={`flex flex-col gap-y-[15px] ${
          id % 2 === 1 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h2 className="font-medium text-black100 text-center text-[28px] md:text-start md:text-[38px] lg:text-[48px] ">
          {name}
        </h2>
        {sub.map((item) => (
          <div className="flex items-center gap-x-[15px]" key={item.id}>
            <div
              className={`flex justify-center items-center rounded-full w-[65px] h-[65px] flex-none ${item.bgColor}`}
            >
              <img src={item.icon} className="w-[33px] h-[33px]" />
            </div>
            <div className="flex-grow">
              <h3 className="mb-[15px] text-black100 font-medium text-lg md:text-2xl">
                {item.name}
              </h3>
              <p className="text-sm text-black20 md:text-lg ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
