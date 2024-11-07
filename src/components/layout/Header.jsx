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
    <header className="flex justify-between items-center px-3 py-2 md:px-6 md:py-3 z-10 w-full">
      {/* Logo */}
      <div className="logo flex-shrink-0">
        <NavLink to="/">
          <img
            src={logo}
            alt="JIFFY"
            className="h-8 sm:h-10 md:h-12 transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="text-2xl sm:text-3xl text-white z-20 md:hidden focus:outline-none"
      >
        {isOpen ? <FaTimes className="h-6 w-6 sm:h-8 sm:w-8" /> : <FaBars className="h-6 w-6 sm:h-8 sm:w-8" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-end">
        <ul className="flex flex-wrap space-x-2 sm:space-x-3 lg:space-x-4 items-center list-none text-white">
          {navitems.map((item, index) => (
            <li key={item.id} style={{ transitionDelay: `${index * 50}ms` }}>
              <NavLink
                to={item.link}
                className="font-['Roboto'] text-sm sm:text-base font-medium transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-pink-custom to-blue-custom hover:bg-clip-text hover:text-transparent px-2 sm:px-2.5 py-1.5 rounded"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li style={{ transitionDelay: `${navitems.length * 50}ms` }}>
            <NavLink
              to="/book-demo"
              className="border rounded-full py-1.5 px-3 sm:py-2 sm:px-4 hover:bg-gradient-to-b from-pink-custom to-blue-custom text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
            >
              Book Demo
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-0 left-0 right-0 bg-black bg-opacity-100 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden`}
        style={{
          maxHeight: '80vh', // Adjust max-height for the mobile menu (to prevent taking up too much space)
          minHeight: '60vh', // Adjust min-height for mobile menu (reasonable height when opened)
          padding: '20px 0', // Add padding for better spacing
        }}
      >
        <ul className="flex flex-col items-center space-y-3 text-center text-white mt-4">
          {navitems.map((item) => (
            <li key={item.id} onClick={toggleMenu}>
              <NavLink
                to={item.link}
                className="font-['Roboto'] text-lg py-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-b from-pink-custom to-blue-custom hover:bg-clip-text hover:text-transparent rounded"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li onClick={toggleMenu} className="mt-3">
            <NavLink
              to="/book-demo"
              className="border rounded-full py-2.5 px-5 hover:bg-gradient-to-b from-pink-custom to-blue-custom text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-opacity-90"
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
