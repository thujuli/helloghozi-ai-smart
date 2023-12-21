const variants = {
  body1: "font-medium text-[24px]",
  body2: "font-medium text-[18px]",
  p1: "text-[18px]",
  p2: "text-[14px]",
};

export default function P({ children, className = "", size = "p1" }) {
  const classname = `font-poppins ${variants[size]} ${className}`;
  return <p className={classname}>{children}</p>;
}
