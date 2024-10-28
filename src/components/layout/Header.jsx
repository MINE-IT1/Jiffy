import React, { useState } from "react";
import logo from "../../assets/jiffy-logo.svg";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  const navitems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Features", link: "/features" },
    { id: 4, name: "Services", link: "/services" },
    { id: 5, name: "Who Can Use", link: "/who" },
    { id: 6, name: "Resources", link: "/resources" },
    { id: 7, name: "Team", link: "/team" },
    { id: 8, name: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center p-4 fixed w-full bg-opacity-90  z-10">
      {/* Logo */}
      <div className="logo flex-shrink-0">
        <NavLink to="/">
          <img src={logo} alt="JIFFY" className="h-12 transition-transform duration-500 ease-in-out hover:scale-105" />
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={toggleMenu} className="text-3xl text-white z-20 md:hidden">
        {isOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-grow justify-center">
        <ul className="flex space-x-6 items-center list-none text-white">
          {navitems.map((item, index) => (
            <li key={item.id} style={{ transitionDelay: `${index * 50}ms` }}>
              <NavLink
                to={item.link}
                className="font-['Roboto'] text-[18px] font-medium leading-[21.09px] transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-pink-custom to-blue-custom hover:bg-clip-text hover:text-transparent px-3 py-1 rounded"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li style={{ transitionDelay: `${navitems.length * 50}ms` }}>
            <NavLink
              to="/book-demo"
              className="border rounded-full py-2 px-4 hover:bg-gradient-to-b from-pink-custom to-blue-custom text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-90"
            >
              Book Demo
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-95 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "max-h-screen h-auto py-6 opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 text-center text-white mt-12">
          {navitems.map((item) => (
            <li key={item.id} onClick={toggleMenu}>
              <NavLink
                to={item.link}
                className="font-['Roboto'] text-[18px] font-medium transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-pink-custom to-blue-custom hover:bg-clip-text hover:text-transparent px-3 py-1 rounded"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li onClick={toggleMenu}>
            <NavLink
              to="/book-demo"
              className="border rounded-full py-2 px-4 hover:bg-gradient-to-b from-pink-custom to-blue-custom text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-90"
            >
              Book Demo
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
