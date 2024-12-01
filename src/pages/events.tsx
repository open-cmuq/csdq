import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getEvents } from "../events";
import { Event } from "../types";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

interface EventLoaderData {
  events: Event[];
}

export async function loader({ params }: any): Promise<EventLoaderData> {
  const events = await getEvents();
  console.log(events);
  return { events };
}

export default function Events() {
  const { events }: EventLoaderData = useLoaderData() as EventLoaderData;

  // Generate unique event types, case-insensitive
  const eventTypeMap = new Map<string, string>();
  events.forEach((event) => {
    const lowerType = event.type.toLowerCase();
    if (!eventTypeMap.has(lowerType)) {
      eventTypeMap.set(lowerType, event.type);
    }
  });
  const uniqueEventTypes = Array.from(eventTypeMap.values());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeChange = (type: string) => {
    const lowerType = type.toLowerCase();
    setSelectedTypes((prev) =>
      prev.includes(lowerType)
        ? prev.filter((t) => t !== lowerType)
        : [...prev, lowerType]
    );
  };

  const handleClearFilters = () => {
    setSelectedDate(null);
    setSearchTerm("");
    setSelectedTypes([]);
  };

  const filteredEvents = events.filter((event) => {
    const matchesDate = selectedDate ? event.date >= selectedDate : true;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      event.title.toLowerCase().includes(searchLower) ||
      event.desc.toLowerCase().includes(searchLower);
    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(event.type.toLowerCase());
    return matchesDate && matchesSearch && matchesType;
  });

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="flex flex-row justify-center space-x-10">
        {/* Filters */}
        <div className="w-full max-w-md mr-8">
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-center"
            />
            <div className="mb-4">
              <Calendar
                onChange={(date) => setSelectedDate(date as Date)}
                value={selectedDate}
                className="border rounded mx-auto"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2 text-center">
                Filter by Type
              </h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-2">
                  {uniqueEventTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type.toLowerCase())}
                        onChange={() => handleTypeChange(type)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <span className="ml-2 text-gray-200">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleClearFilters}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              Clear Filters
            </button>
          </div>
        </div>
        {/* Event List */}
        <div className="w-full max-w-6xl">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="bg-white shadow-md rounded mb-8 p-6"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex">
                  {/* Left Side - Date and Time */}
                  <div className="w-1/4 flex flex-col items-center justify-center border-r pr-4">
                    <p className="text-gray-800 text-xl font-semibold">
                      {event.date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-gray-600">
                      {event.date.toLocaleDateString()}
                    </p>
                    <p className="mt-2 text-gray-600 text-center">
                      {event.where}
                    </p>
                  </div>
                  {/* Right Side - Event Details */}
                  <div className="w-3/4 pl-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-gray-800 text-2xl font-bold">
                        {event.title}
                      </h3>
                      <p className="text-gray-800 mt-2 text-md">{event.desc}</p>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                      <p className="text-gray-600 text-sm">
                        {event.organizer}
                      </p>
                      <a
                        href={`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
                          event.title
                        )}&dates=${formatDateForCalendar(
                          event.date
                        )}&details=${encodeURIComponent(
                          event.desc
                        )}&location=${encodeURIComponent(event.where)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Add to Calendar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function formatDateForCalendar(date: Date): string {
  const start = date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const end = new Date(date.getTime() + 60 * 60 * 1000)
    .toISOString()
    .replace(/-|:|\.\d\d\d/g, "");
  return `${start}/${end}`;
}
