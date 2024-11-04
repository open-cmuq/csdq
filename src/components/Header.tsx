import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 object-contain hover:rotate-12 transition-transform duration-300 ease-in-out cursor-pointer"
            src="/images/cs_logo.png"
            alt="SCS Qatar Logo"
          />
          <span className="ml-3 text-base sm:text-lg font-bold text-black hidden sm:inline">
            Computer Science Qatar
          </span>
        </div>

        {/* Navigation */}
        <div className="flex-1 ml-6">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
