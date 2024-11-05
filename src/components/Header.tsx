import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            className="w-60 h-20 object-contain hover:rotate-12 transition-transform duration-300 ease-in-out cursor-pointer flex-shrink-0"
            src="/images/cs-header.png"
            alt="SCS Qatar Logo"
          />
        </div>

        {/* Navigation */}
        <div className="flex-1 ml-6">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
