import "../styles/Home.css";
import { motion } from "framer-motion";
import UpcomingEvents from "../components/UpcomingEvents";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaYoutubeSquare
} from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-gray-700 text-white py-8">
    <div className="container mx-auto px-8">
      <div className="footer-sections grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Carnegie Mellon University in Qatar</h2>
            <p>Computer Science Department</p>
            <p>Education City</p>
            <p>PO Box 24866</p>
            <p>Doha, Qatar</p>
        </div>
        <nav aria-label="Info Menu" className="mb-4 pt-4">
          <ul className="menu space-y-2">
            <li className="menu-item">
              <a href="https://www.qatar.cmu.edu/home-3/contact/" className="hover:underline">Contact</a>
            </li>
            <li className="menu-item">
              <a href="https://www.qatar.cmu.edu/about-us/media-resources/" className="hover:underline">Press Requests</a>
            </li>
            <li className="menu-item">
              <a href="https://cmu.edu/computing/dao/index.html" className="hover:underline">Accessibility</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom flex justify-between items-center mt-8">
        <div className="footer-social-icons flex space-x-4">
          <a aria-label="twitter" target="_blank" href="https://x.com/carnegiemellonq" className="text-2xl text-white hover:text-gray-400">
            <FaTwitterSquare />
          </a>
          <a aria-label="facebook" target="_blank" href="https://www.facebook.com/CarnegieMellonQ/" className="text-2xl text-white hover:text-gray-400">
            <FaFacebookSquare />
          </a>
          <a aria-label="youtube" target="_blank" href="https://www.youtube.com/user/CarnegieMellonQatar" className="text-2xl text-white hover:text-gray-400">
            <FaYoutubeSquare />
          </a>
          <a aria-label="instagram" target="_blank" href="https://www.instagram.com/scsatcmuq/" className="text-2xl text-white hover:text-gray-400">
            <FaInstagramSquare />
          </a>
          <a aria-label="linkedin" target="_blank" href="https://www.linkedin.com/school/carnegie-mellon-university-in-qatar/" className="text-2xl text-white hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
        <a href="https://www.cmu.edu" style={{ borderBottom: "none" }}>
          <img
            style={{ maxWidth: "250px" }}
            src="/public/images/cs-header.png"
            alt="Carnegie Mellon University"
          />
        </a>
      </div>
    </div>
  </footer>
);

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-grow">
        <img
          className="hidden md:block w-full min-h-72"
          src="/images/campus-banner.jpeg"
          alt="Campus banner"
        />
        <img
          className="block md:hidden w-full min-h-60"
          src="/images/christos.jpeg"
          alt="Mobile banner"
        />
        {/* Skip a bit after bg image */}
        <div className="container mx-auto px-8 py-8">
          {/* Welcome section */}
          <motion.h1
            className="text-4xl font-open-sans text-center mb-4 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our Research Community
          </motion.h1>
          <motion.p
            className="text-lg text-center max-w-2xl mx-auto mb-12 text-iron-gray"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Discover the latest updates in research, upcoming events, and more.
          </motion.p>

          {/* News preview */}
          {/* Placeholder for future news preview */}
        </div>
        {/* Upcoming Events Bar */}
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
