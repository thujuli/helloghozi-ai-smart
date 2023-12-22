import { useState, useEffect } from "react";
import menu from "../../assets/img/menu.svg";
import close from "../../assets/img/close.svg";
import Button from "../atoms/Button";

const menus = [
  { name: "Home" },
  { name: "Pricing" },
  { name: "About" },
  { name: "Contact" },
];

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const stickyNavbar = () => {
    window.scrollY > 90
      ? setStickyClass("fixed top-0 left-0 right-0")
      : setStickyClass("relative bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);
    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);

  return (
    <header className="max-w-full mx-auto">
      <nav
        className={`${stickyClass} bg-white transition-all z-50 flex justify-between items-center p-5 md:px-10 lg:px-[100px]`}
      >
        <h5 className="font-medium text-lg text-primary100 py-[10px] md:py-[13px] lg:p-[10px] lg:text-[28px]">
          MUAI
        </h5>
        <ul className="hidden text-black50 items-center gap-x-5 md:flex md:text-sm lg:text-lg ">
          {menus.map((menu) => (
            <li key={menu.name}> {menu.name} </li>
          ))}
        </ul>
        <Button className="hidden px-[34px] py-[13px] md:block ">
          Get Started
        </Button>
        <button className="md:hidden" onClick={handleOpenNavbar}>
          {openNavbar ? (
            <div className="flex justify-center items-center bg-primary100 rounded-full w-8 h-8">
              <img src={close} alt="Close Icon" />
            </div>
          ) : (
            <img src={menu} alt="Menu Icon" />
          )}
        </button>
      </nav>
      <ul
        className={`fixed backdrop-blur-lg min-h-screen top-0 left-0 right-0 pt-[96px] space-y-6 text-black50 font-medium items-center ${
          openNavbar ? "flex flex-col" : "hidden"
        }`}
      >
        {menus.map((menu) => (
          <li key={menu.name}>{menu.name}</li>
        ))}
        <Button className="px-[34px] py-[13px] w-full">Get Started</Button>
      </ul>
    </header>
  );
}
