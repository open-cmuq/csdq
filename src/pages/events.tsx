import React from "react";
import { motion } from "framer-motion";

// Mock data for events
const events = [
  {
    id: 1,
    desc: "Join us for a day of insightful talks on AI and Machine Learning.",
    date: "September 30, 2024",
    where: "Room 1185",
  },
  {
    id: 2,
    desc: "Hands-on workshop on Robotics and Automation.",
    date: "October 12, 2024",
    where: "Room 1185",
  },
  {
    id: 3,
    desc: "Seminar on Climate Change and Sustainable Technologies.",
    date: "November 5, 2024",
    where: "Room 1185",
  },
  {
    id: 4,
    desc: "Seminar on Climate Change and Sustainable Technologies.",
    date: "November 5, 2024",
    where: "Room 1185",
  },
  {
    id: 5,
    desc: "Seminar on Climate Change and Sustainable Technologies.",
    date: "November 5, 2024",
    where: "Room 1185",
  },
];

export default function Events() {
  const defaultPhoto = "/images/cs_logo.png";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white shadow-md rounded overflow-hidden"
            whileHover={{ scale: 1.05 }} // Slight scaling effect on hover
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation to final state
            transition={{ duration: 0.2 }}
          >
            <img
              src={defaultPhoto}
              alt="Event"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-2">{event.date}</p>
              <p className="text-lg font-semibold">{event.desc}</p>
              {event.where && (
                <p className="text-gray-600 text-sm mb-2">{event.where}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
