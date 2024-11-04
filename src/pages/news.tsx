import React from "react";
import { motion } from "framer-motion";

// Mock data for news
const newsArticles = [
  {
    id: 1,
    title: "New Research Initiative Launched",
    date: "September 15, 2024",
    desc: "A new research initiative focusing on AI and sustainability has been launched at the university.",
    img: "https://source.unsplash.com/random/800x600/?research",
  },
  {
    id: 2,
    title: "Award-Winning Project by Students",
    date: "October 1, 2024",
    desc: "Students from the computer science department won the national coding competition.",
    img: "https://source.unsplash.com/random/800x600/?award",
  },
  {
    id: 3,
    title: "Upcoming Webinar on Machine Learning",
    date: "November 20, 2024",
    desc: "Join us for a webinar on the latest trends in machine learning hosted by leading experts.",
    img: "https://source.unsplash.com/random/800x600/?webinar",
  },
];

export default function News() {
  const defaultPhoto = "/images/cs_logo.png";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-12 text-center p-8">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <motion.div
            key={article.id}
            className="bg-white shadow-md rounded overflow-hidden"
            whileHover={{ scale: 1.05 }} // Slight scaling effect on hover
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation to final state
            transition={{ duration: 0.2 }}
          >
            <img
              src={defaultPhoto}
              alt="Article"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">{article.date}</p>
              <p className="text-lg font-semibold">{article.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
