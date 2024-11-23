// fetchEvents.js
import fs from "fs";
import fetch from "node-fetch";
import ICAL from "ical.js";

async function fetchAndSaveEvents() {
  try {
    const calendarUrl =
      "https://calendar.google.com/calendar/ical/c_daef7d06f36e6e3dae03b11d5b90a757e84b9e0e61287b30f2f2b1654d1a9e2c%40group.calendar.google.com/public/basic.ics";

    const response = await fetch(calendarUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.statusText}`);
    }

    const icsData = await response.text();

    // Parse the ICS data
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents("vevent");

    const events = [];

    vevents.forEach((vevent) => {
      const event = new ICAL.Event(vevent);

      // Handle recurring events if necessary
      if (event.isRecurring()) {
        const iterator = event.iterator();
        let next;
        const today = new Date();
        const futureLimit = new Date();
        futureLimit.setMonth(futureLimit.getMonth() + 1); // Adjust as needed

        while ((next = iterator.next())) {
          const occurrenceDate = next.toJSDate();
          if (occurrenceDate < today) continue;
          if (occurrenceDate > futureLimit) break;

          events.push({
            id: events.length + 1,
            title: event.summary || "Event",
            desc: event.description || "...",
            date: occurrenceDate.toISOString(),
            where: event.location || "TBD",
          });
        }
      } else {
        events.push({
          id: events.length + 1,
          title: event.summary || "Event",
          desc: event.description || "...",
          date: event.startDate.toJSDate().toISOString(),
          where: event.location || "TBD",
        });
      }
    });

    // Save the events to a JSON file in the src directory
    fs.writeFileSync("src/events.json", JSON.stringify(events, null, 2));
    console.log("Events have been fetched and saved to src/events.json");
  } catch (error) {
    console.error("Error fetching or parsing events:", error);
    process.exit(1);
  }
}

fetchAndSaveEvents();
