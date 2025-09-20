import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/services",
      text: "Services",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="bg-navbar-color sticky top-0 z-50">
      <section className="container mx-auto flex items-center justify-between  px-5 md:px-10 lg:px-20 py-4 border-b border-[#12212606]  ">
        <a href="/" className="flex items-center gap-2 text-lg font-bold">
          <img src={logo} alt="" /> Bahey Consultancy
        </a>
        <div className=" items-center gap-4 hidden md:flex">
          <div className="flex items-center gap-4">
            {links.map((link, i) => (
              <NavLink key={i} to={link.path} end>
                {({ isActive }) => (
                  <div
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gray-100 text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute left-1/2 -bottom-[2px] w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></span>
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </div>
          <button
            onClick={handleClick}
            className="bg-btn-linier py-2 px-6 text-white text-sm rounded-xl"
          >
            Get Started
          </button>
        </div>
        <div className="flex justify-end md:hidden ">
          {/* Toggle Button */}
          <button onClick={handleMenuToggle} className="text-2xl z-50">
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`absolute top-16 left-0 w-full bg-navbar-color flex flex-col items-center justify-center gap-4 py-6 rounded-b-2xl shadow-md
          transform transition-all duration-500 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
          >
            {links.map((link, i) => (
              <NavLink key={i} to={link.path} end>
                {({ isActive }) => (
                  <div
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gray-100 text-primary font-semibold"
                        : "text-secondary"
                    }`}
                  >
                    {link.text}
                    {isActive && (
                      <span className="absolute left-1/2 -bottom-[2px] w-2 h-2 bg-primary rounded-full transform -translate-x-1/2"></span>
                    )}
                  </div>
                )}
              </NavLink>
            ))}
            <button className="bg-btn-linier py-2 px-6 text-white text-sm rounded-xl shadow-md hover:opacity-90 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
