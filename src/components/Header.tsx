import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Header() {
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

  return (
    <header
      className={`md:sticky top-0 ${
        scrolled
          ? "bg-white text-black"
          : "bg-transparent hover:bg-white hover:text-black"
      } p-4 transition-colors duration-400 ease-in-out`}
    >
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="col-span-1 w-10 hover:-rotate-12 cursor-pointer">
          <img src="/images/cs_logo.png" />
        </div>

        <Navbar />
      </div>
    </header>
  );
}
