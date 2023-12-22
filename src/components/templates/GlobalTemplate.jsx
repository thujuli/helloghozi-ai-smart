import Navbar from "../organisms/Navbar";

export default function GlobalTemplate({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
