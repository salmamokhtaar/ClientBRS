import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md text-black p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-600 cursor-pointer sm:ml-20 ml-0 text-white p-2 rounded-full">
          {/* Logo */}
        </div>
        <span className="text-2xl font-bold cursor-pointer text-black">BRS</span>
      </div>
      <nav className="hidden md:flex sm:mr-20 space-x-4 mr-4">
        <ScrollLink to="home" smooth={true} duration={500} className="hover:underline text-black cursor-pointer">Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="hover:underline text-black cursor-pointer">About</ScrollLink>
        <ScrollLink to="business-types" smooth={true} duration={500} className="hover:underline text-black cursor-pointer">BusinessType</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline text-black cursor-pointer">Contact</ScrollLink>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-black" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-start p-4 z-50">
          <button onClick={closeMenu} className="absolute top-4 right-4">
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-black" />
          </button>
          <nav className="flex flex-col space-y-4 mt-8">
            <ScrollLink to="home" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={closeMenu}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={closeMenu}>About</ScrollLink>
            <ScrollLink to="business-types" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={closeMenu}>BusinessType</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer" onClick={closeMenu}>Contact</ScrollLink>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={closeMenu}>Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;