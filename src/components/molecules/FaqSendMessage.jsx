import Button from "../atoms/Button";

function FaqSendMessage({ children }) {
  return (
    <div className="flex flex-col bg-primary100 rounded-[60px] p-5 md:flex-row md:px-[60px] md:py-[50px] md:gap-x-[10px] lg:py-20 lg:justify-between">
      <div className="mb-[10px] md:mb-0">{children}</div>
      <div className="flex-none flex items-center justify-center">
        <Button variant="outlinePrimary" className="py-4 px-[42px]">
          Shoot Us A Message!
        </Button>
      </div>
    </div>
  );
}

function Title({ children, className }) {
  return (
    <h3 className={`text-white text-lg font-medium md:text-2xl ${className}`}>
      {children}
    </h3>
  );
}

function Description({ children, className }) {
  return (
    <p className={`text-white text-sm md:text-lg ${className}`}>{children}</p>
  );
}

FaqSendMessage.Title = Title;
FaqSendMessage.Description = Description;

export default FaqSendMessage;
