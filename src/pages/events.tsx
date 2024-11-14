import React from "react";
import { useLoaderData } from "react-router-dom";
import { getEvents } from "../events";
import { Event } from "../types";
import { motion } from "framer-motion";

interface EventLoaderData {
  events: Event[];
}

export async function loader({ params }: any): Promise<EventLoaderData> {
  const events = await getEvents();
  return { events };
}

export default function Events() {
  const defaultPhoto = "/images/cs_logo.png";
  const { events }: EventLoaderData = useLoaderData() as EventLoaderData;

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
              <p className="text-gray-600 text-sm mb-2">
                {event.date.toLocaleDateString("en-QA", {
                  day: "numeric",
                  month: "long",
                })}
              </p>
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
