import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer"; 
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/events") 
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="sydney-title">Sydney Events</h1>

      {/* Centered Event Cards Grid */}
      <div className="flex justify-center w-full">
        <div className="event-grid">
          {events.slice(0, 8).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
