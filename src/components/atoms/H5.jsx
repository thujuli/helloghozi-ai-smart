export default function H5({ children, className = "" }) {
  const classname = `font-poppins font-medium text-[28px] ${className}`;
  return <h5 className={classname}>{children}</h5>;
}
