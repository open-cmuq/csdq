import "../styles/Home.css";
import { motion } from "framer-motion";
import UpcomingEvents from "../components/UpcomingEvents";

const Footer: React.FC = () => (
  <footer className="bg-gray-700 text-white text-center py-4">
    &copy; 2024 Your Company. All rights reserved.
  </footer>
);

function HomePage() {
  return (
    <>
      {/* Main content */}
      <img
        className="hidden md:block w-full min-h-72"
        src="/images/campus-banner.jpeg"
      ></img>
      <img
        className="block md:hidden w-full min-h-60"
        src="/images/christos.jpeg"
      ></img>
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
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="bg-white shadow-lg rounded p-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 text-iron-gray">
              Stay Tuned for Updates
            </h2>
            <p className="text-iron-gray">
              Exciting content coming soon. Check back later!
            </p>
          </motion.div>
        </div>
        */}
      </div>
      {/* Upcoming Events Bar */}
      <UpcomingEvents />
      <Footer />
    </>
  );
}

export default HomePage;
