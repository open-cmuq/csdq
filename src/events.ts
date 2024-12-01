import { Event } from "./types";
import eventsData from "./events.json";

export async function getEvents(): Promise<Event[]> {
  // Convert date strings back to Date objects
  const events = eventsData.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));
  
  return events;
}
