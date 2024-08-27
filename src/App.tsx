//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import React from "react";
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
    <nav className="font-bold col-span-2 flex justify-center space-x-4">
      <NavbarItem name="Home" />
      <NavbarItem name="Events" />
      <NavbarItem name="Research" />
      <NavbarItem name="Alumni" />
    </nav>
  );
};

const AppHeader = () => {
  return (
    <header className="sticky top-0 bg-gray-950 text-pureWhite p-4">
      <div className="container mx-auto grid grid-cols-3 items-center">
        {/* Col1: logo */}
        <div className="col-span-1 w-10 hover:-rotate-12 cursor-pointer">
          <img src="/images/cs_logo.png" />
        </div>

        {/* Col2: Nav bar */}
        <AppNavbar />
      </div>
    </header>
  );
};

function App() {
  return (
    <>
      <AppHeader />

      <div className="flex ">
        <img src="/images/christos.jpeg" className="w-screen" />
      </div>

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
