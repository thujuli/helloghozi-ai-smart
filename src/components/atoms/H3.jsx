export default function H3({ children, className = "" }) {
  const classname = `font-poppins font-medium text-[48px] ${className}`;
  return <h3 className={classname}>{children}</h3>;
}
