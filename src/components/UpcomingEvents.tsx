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
    <div className="m-auto">
      <div className="grid grid-cols-3 mx-2">
        <div className="col-span-1 border-2">
          <div className="flex flex-col h-full">
            <div className="flex-grow border-2 pt-2">
              {day} {month}
            </div>
            <div className="w-full bg-zinc-600 text-white border-2 p-1">
              {hour}
            </div>
          </div>
        </div>

        <div className="col-span-2 border-2 p-5">
          {" "}
          <div> {event.title} </div> <div> {event.description} </div>{" "}
        </div>
      </div>
    </div>
  );
};

function UpcomingEvents() {
  const myEventDate = new Date("2024-09-01T10:30:00");
  const events: Event[] = [
    {
      title: "Event 1",
      description: "Description for Event 1",
      date: new Date("2024-09-01T10:30:00"),
    },
    {
      title: "Event 2",
      description: "Description for Event 2",
      date: new Date("2024-09-02T15:45:00"),
    },
    {
      title: "Event 3",
      description: "Description for Event 3",
      date: new Date("2024-09-03T18:00:00"),
    },
  ];

  return (
    <>
      <p className="mt-2 p-4 text-3xl font-bold flex justify-start">
        Upcoming CS Events:
      </p>
      <div className="flex box-border justify-center items-center mt-2 w-screen h-40 bg-black">
        {events.slice(0, 3).map((event, idx) => (
          <UpcomingEventCard key={idx} event={event} />
        ))}
      </div>
    </>
  );
}

export default UpcomingEvents;
