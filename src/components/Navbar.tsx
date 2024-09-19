import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  interface NavbarItemProps {
    name: string;
    link: string;
  }

  const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
    return (
      <Link to={`/${link}`} className="px-4 py-2 text-sm">
        <button>{name}</button>
      </Link>
    );
  };

  return (
    <nav className="flex justify-center items-center space-x-4 font-bold col-span-2 relative">
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center space-x-4">
        <NavbarItem name="Home" link="#" />
        <NavbarItem name="Events" link="events" />
        <NavbarItem name="Research" link="research" />
        <NavbarItem name="News" link="news" />
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="absolute right-4 top-4 sm:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon: Hamburger for closed state, X for open state */}
          {isOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-12 right-4 bg-white border rounded shadow-md z-50">
          <div className="flex flex-col items-start p-2 space-y-2">
            <NavbarItem name="Home" link="#" />
            <NavbarItem name="Events" link="events" />
            <NavbarItem name="Research" link="research" />
            <NavbarItem name="News" link="news" />
          </div>
        </div>
      )}
    </nav>
  );
}
