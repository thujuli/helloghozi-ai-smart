function FaqHeader({ children }) {
  return (
    <div className="bg-primary10 py-[100px] rounded-[60px] border border-black10 text-center col-span-1">
      {children}
    </div>
  );
}

function Title({ children, className = "" }) {
  return (
    <h2
      className={`font-medium text-black100 text-[28px] md:text-[38px] lg:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}

function Description({ children, className = "" }) {
  return (
    <p className="text-black20 text-sm md:text-lg md:w-10/12 md:mx-auto lg:w-6/12 lg:font-medium">
      {children}
    </p>
  );
}

FaqHeader.Title = Title;
FaqHeader.Description = Description;

export default FaqHeader;
