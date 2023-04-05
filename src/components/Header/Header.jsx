import "./Header.css";
import WebMenu from "../WebMenu/WebMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useState } from "react";
import logo from "../../assests/logo192.png";
import { NavLink } from "react-router-dom";
const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "about",
    display: "About Us",
  },
  {
    path: "contact",
    display: "Contact Us",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="p-5 sticky top-0 w-full flex justify-center items-center border-2 h-16 text-black bg-white z-50">
      <WebMenu links={nav__links} className="text-black" />
      <div className="flex justify-between w-full sm:hidden">
        <div className="w-12 cursor-pointer">
          <NavLink to="/">
            <img alt="logo" src={logo} className="rounded" />
          </NavLink>
        </div>
        <button
          className="bg-white shadow-md px-5 py-2 rounded-full text-zinc-500"
          onClick={() => {
            setOpen(true);
          }}
        >
          Menu
        </button>
      </div>
      {open ? (
        <MobileMenu links={nav__links} close={() => setOpen(false)} />
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Header;
