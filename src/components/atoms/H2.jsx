export default function H2({ children, className = "" }) {
  const classname = `font-poppins font-medium text-[58px] ${className}`;
  return <h2 className={classname}>{children}</h2>;
}
