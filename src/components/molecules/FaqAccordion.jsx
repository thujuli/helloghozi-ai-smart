import plusIcon from "../../assets/img/plus.svg";

export function FaqAccordion({ children }) {
  return (
    <div className="flex flex-col gap-y-[10px] p-5 border rounded-[20px] border-black10">
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <div className="flex items-center gap-x-[10px]">
      <button className="w-[31px] h-[31px] flex items-center justify-center flex-none">
        <img src={plusIcon} alt="Plus Icon" />
      </button>
      <h3 className="text-black100 text-lg font-medium flex-row md:text-2xl">
        {children}
      </h3>
    </div>
  );
}

function Description({ children }) {
  return (
    <p className="text-sm text-black20 md:text-lg md:px-[42px]">{children}</p>
  );
}

FaqAccordion.Title = Title;
FaqAccordion.Description = Description;

export default FaqAccordion;
