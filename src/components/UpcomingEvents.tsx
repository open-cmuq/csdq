import React from "react";

interface Event {
  title: string;
  description: string;
  date: Date;
}

interface UpcomingEventCardProps {
  event: Event;
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  const day = event.date.toLocaleDateString("en-US", { day: "numeric" });
  const month = event.date.toLocaleDateString("en-US", { month: "short" });
  const hour = event.date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="m-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <div className="grid grid-cols-1 sm:grid-cols-5 bg-white rounded-lg shadow-md overflow-hidden">
        {/* date and time  */}
        <div className="sm:col-span-1 flex sm:flex-col items-center sm:items-start bg-steel-gray p-3 border-r-2 sm:border-r-0">
          <div className="text-black text-xl font-semibold mr-4">
            {day} {month}
          </div>
          <div className="bg-teal-thread text-white font-medium text-sm px-2 py-1 rounded mt-2 sm:mt-4">
            {hour}
          </div>
        </div>

        {/* event details */}
        <div className="sm:col-span-4 p-4">
          <h3 className="text-black font-bold text-lg">{event.title}</h3>
          <p className="text-iron-gray text-sm mt-1">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

function UpcomingEvents() {
  // example Event Data
  const events = [
    {
      date: new Date("2024-09-01T10:30:00"),
      title: "AI and Machine Learning Seminar",
      description:
        "Join us for an insightful seminar on the latest trends in AI and Machine Learning.",
    },
    {
      date: new Date("2024-09-15T09:00:00"),
      title: "Robotics Workshop",
      description:
        "Hands-on workshop exploring the world of robotics and automation technologies.",
    },
    {
      date: new Date("2024-10-05T14:00:00"),
      title: "Cybersecurity Conference",
      description:
        "A conference dedicated to the latest in cybersecurity research and practices.",
    },
  ];

  return (
    <>
      <p className="m-3 p-4 text-3xl font-bold flex justify-start ">
        Upcoming CS Events:
      </p>
      <div className="flex flex-wrap justify-center items-center mt-2 bg-skibo-red p-4 gap-6">
        {events.slice(0, 3).map((event, idx) => (
          <UpcomingEventCard key={idx} event={event} />
        ))}
      </div>
    </>
  );
}

export default UpcomingEvents;
