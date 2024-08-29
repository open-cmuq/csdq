//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import UpcomingEvents from "./components/UpcomingEvents";

const AppNavbar = () => {
  interface NavbarItemProps {
    name: string;
  }

  const NavbarItem: React.FC<NavbarItemProps> = ({ name }) => {
    return (
      <a href="#">
        <button>{name}</button>
      </a>
    );
  };

  return (
    <nav className="flex justify-center space-x-4 font-bold col-span-2">
      <NavbarItem name="Home" />
      <NavbarItem name="Events" />
      <NavbarItem name="Research" />
      <NavbarItem name="Alumni" />
    </nav>
  );
};

const AppHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrolled);
  return (
    <header
      className={`sticky top-0 ${scrolled ? "bg-white text-black" : "bg-transparent hover:bg-white hover:text-black"} p-4 transition-colors duration-400 ease-in-out`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="col-span-1 w-10 hover:-rotate-12 cursor-pointer">
          <img src="/images/cs_logo.png" />
        </div>

        <AppNavbar />
      </div>
    </header>
  );
};

function App() {
  return (
    <>
      <AppHeader />

      <div className="homepage-background"></div>
      {/* empty div for visual space, bad hack */}
      <div style={{ height: "65vh" }}></div>

      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>
      <div className="p-2">Hello</div>

      <UpcomingEvents />

      <div className="p-2">Hello</div>
    </>
  );
}

export default App;
