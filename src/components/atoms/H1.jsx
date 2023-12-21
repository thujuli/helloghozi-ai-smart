export default function H1({ children, className = "" }) {
  const classname = `font-poppins font-medium text-[68px] ${className}`;
  return <h1 className={classname}>{children}</h1>;
}
