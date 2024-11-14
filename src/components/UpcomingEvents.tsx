import React from "react";
import { useLoaderData } from "react-router-dom";
import { Event } from "../types";

interface UpcomingEventCardProps {
  event: Event;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  const day = event.date.toLocaleDateString("en-QA", { day: "numeric" });
  const month = event.date.toLocaleDateString("en-QA", { month: "short" });
  const hour = event.date.toLocaleTimeString("en-QA", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="m-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="grid grid-cols-1 sm:grid-cols-6 bg-white rounded-lg shadow-md overflow-hidden">
        {/* date and time  */}
        <div className="sm:col-span-1 flex sm:flex-col items-center justify-center bg-steel-gray p-3 border-r-2 sm:border-r-0">
          {/* TODO(mjawaher): fix, pl-3 is a hack, this should be centered */}
          <div className="pl-3 text-black text-xl font-semibold mr-4">
            {day} {month}
          </div>
          <div className="bg-carnegie-red text-white font-medium text-sm px-2 py-1 rounded mt-2 sm:mt-4">
            {hour}
          </div>
        </div>

        {/* event details */}
        <div className="sm:col-span-5 p-4">
          <h3 className="text-black font-bold text-lg">{event.title}</h3>
          <p className="text-iron-gray text-sm mt-1">{event.desc}</p>
        </div>
      </div>
    </div>
  );
};

interface EventLoaderData {
  events: Event[];
}

function UpcomingEvents() {
  const { events }: EventLoaderData = useLoaderData() as EventLoaderData;
  return (
    <>
      <p className="m-3 p-4 text-3xl font-bold flex justify-start ">
        Upcoming CS Events:
      </p>
      <div className="flex flex-wrap justify-center items-center mt-2 bg-gray-800 p-4 gap-6">
        {events.slice(0, 3).map((event: Event, idx: number) => (
          <UpcomingEventCard key={idx} event={event} />
        ))}
      </div>
    </>
  );
}

export default UpcomingEvents;
