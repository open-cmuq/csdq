import Navbar from "./Navbar";
import "../styles/Home.css";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a
            href="https://www.qatar.cmu.edu/academics-research/academics/computer-science/"
            target="_blank"
          >
            <img
              className="w-68 h-16 object-contain hover:rotate-3 transition-transform duration-300 ease-in-out cursor-pointer flex-shrink-0"
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
