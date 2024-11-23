import "../styles/Home.css";
import { motion } from "framer-motion";
import UpcomingEvents from "../components/UpcomingEvents";

const Footer: React.FC = () => (
  <footer className="bg-gray-700 text-white text-center py-4">
    &copy; 2024 Carnegie Mellon University In Qatar. All rights reserved.
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
