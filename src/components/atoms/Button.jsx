import arrowRight from "../../assets/img/arrow-right.svg";

const variants = {
  default: "bg-primary100 text-white",
  outline: "text-primary100 border-[1.5px] border-primary100",
  logo: "bg-primary100 text-white",
  white: "bg-white text-black100",
};

const Img = ({ imgSrc, imgAlt }) => {
  return <img src={imgSrc} alt={imgAlt} className="w-[30px]" />;
};

export default function Button({
  children,
  className = "",
  variant = "default",
}) {
  const classname = `flex flex-row items-center justify-center gap-x-[10px] rounded-tl-[15px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[15px] font-dmSans text-lg ${className} ${variants[variant]}`;
  return (
    <button className={classname}>
      {children}{" "}
      {variant === "logo" ? (
        <Img imgSrc={arrowRight} imgAlt="arrow right" />
      ) : (
        ""
      )}
    </button>
  );
}
