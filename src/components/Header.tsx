import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Header() {
  return (
    <header className="left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a
            href="https://www.qatar.cmu.edu/academics-research/academics/computer-science/"
            target="_blank"
          >
            <img
              className="w-60 h-20 object-contain hover:rotate-6 transition-transform duration-300 ease-in-out cursor-pointer flex-shrink-0"
              src="/images/cs-header.png"
              alt="SCS Qatar Logo"
            />
          </a>
        </div>
      </div>
      {/* Navigation */}
      <Navbar />
    </header>
  );
}
