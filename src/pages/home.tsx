import "../styles/Home.css";
import { motion } from "framer-motion";
import UpcomingEvents from "../components/UpcomingEvents";

function HomePage() {
  return (
    <>
      {/* Main Content Section */}
      <div className="relative z-10 pt-[65vh] bg-white">
        <div className="homepage-background"></div>
        {/* Start after background image */}
        <div className="container mx-auto px-8 py-16">
          {/* Overlay Welcome Section */}
          <motion.h1
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our Research Community
          </motion.h1>
          <motion.p
            className="text-lg text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Discover the latest updates in research, upcoming events, and more.
          </motion.p>

          {/* News Preview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white shadow-lg rounded p-6 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">
                Stay Tuned for Updates
              </h2>
              <p className="text-gray-600">
                Exciting content coming soon. Check back later!
              </p>
            </motion.div>
          </div>
        </div>
        {/* Upcoming Events Bar */}
        <UpcomingEvents />
      </div>
    </>
  );
}

export default HomePage;
