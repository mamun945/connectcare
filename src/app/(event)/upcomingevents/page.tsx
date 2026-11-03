import EventsCardPage from "@/components/EventsCard";


const UpcomingEventsPage = async () => {
  const res = await fetch("http://localhost:5000/upcoming-events");
  const events = await res.json();

  return (
    <div className="container mx-auto px-4 py-10 space-y-12">

      {/* Events Heading */}
      <section id="events" className="space-y-3 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl">
          Explore Upcoming Events
        </h2>

        <p className="text-sm text-muted-foreground md:text-base">
          Be part of something meaningful. Discover events and make a difference.
        </p>

        <div className="mx-auto h-1 w-16 rounded-full bg-green-600" />
      </section>

      {/* Event Cards */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventsCardPage key={event._id} event={event} />
        ))}
      </section>

    </div>
  );
};

export default UpcomingEventsPage;