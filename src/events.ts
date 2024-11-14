import { Event } from "./types";

// Mock data for events
const events: Event[] = [
  {
    id: 1,
    title: "AI and Machine Learning talk",
    desc: "Join us for a day of insightful talks on AI and Machine Learning.",
    date: new Date("2024-10-05T14:00:00"),
    where: "Room 1185",
  },
  {
    id: 2,
    title: "Robotics Workshop",
    desc: "Hands-on workshop on Robotics and Automation.",
    date: new Date("2024-10-05T14:00:00"),
    where: "Room 1185",
  },
  {
    id: 3,
    title: "Climate change seminar",
    desc: "Seminar on Climate Change and Sustainable Technologies.",
    date: new Date("2024-10-05T14:00:00"),
    where: "Room 1185",
  },
  {
    id: 4,
    title: "Climate change seminar 2",
    desc: "Seminar on Climate Change and Sustainable Technologies.",
    date: new Date("2024-10-05T14:00:00"),
    where: "Room 1185",
  },
];

export async function getEvents(): Promise<Event[]> {
  return events;
}
