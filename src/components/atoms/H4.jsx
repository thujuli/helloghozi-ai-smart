export default function H4({ children, className = "" }) {
  const classname = `font-poppins font-medium text-[38px] ${className}`;
  return <h4 className={classname}>{children}</h4>;
}
