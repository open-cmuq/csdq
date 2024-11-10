import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  interface NavbarItemProps {
    name: string;
    link: string;
  }

  const DesktopNavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
    return (
      <Link
        to={link}
        className="px-4 text-sm py-1 text-white font-bold font-open-sans"
      >
        <button className=" hover:opacity-70 hover:border-opacity-30">
          {name}
        </button>
      </Link>
    );
  };

  const MobileNavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
    return (
      <Link to={link} className="px-4 py-2 text-sm">
        <button>{name}</button>
      </Link>
    );
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="bg-skibo-red py-1">
      <div className="mx-2 s">
        <div className="container mx-auto">
          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-center space-x-4 ">
            <DesktopNavbarItem name="Home" link="/" />
            <DesktopNavbarItem name="Events" link="/events" />
            <DesktopNavbarItem name="Research" link="/research" />
            <DesktopNavbarItem name="News" link="/news" />
          </div>

          {/* Wrapper for Hamburger Button and Mobile Menu */}
          <div ref={menuRef} className="absolute right-4 top-8 sm:hidden z-50">
            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-iron-gray hover:bg-gray-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="absolute top-8 right-0 bg-white border rounded shadow-md z-40">
                <div className="flex flex-col items-start p-2 space-y-2">
                  <MobileNavbarItem name="Home" link="/" />
                  <MobileNavbarItem name="Events" link="/events" />
                  <MobileNavbarItem name="Research" link="/research" />
                  <MobileNavbarItem name="News" link="/news" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
