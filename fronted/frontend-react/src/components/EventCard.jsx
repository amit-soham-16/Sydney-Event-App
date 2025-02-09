import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import EventModal from "./EventModal"; // Ensure this is correctly imported

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="event-card flex max-w-sm bg-gray-900 text-white rounded-lg shadow-lg p-6 transition-transform"
      >
        <h3 className="text-lg font-bold text-gray-200 mb-2">{event.name}</h3>
        <p className="text-gray-400 text-sm">{event.venue}</p>
        <p className="text-gray-300 text-md font-semibold mt-2">{event.price}</p>

        <Button
          className="button mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Get Tickets
        </Button>
      </motion.div>

      {showModal && <EventModal event={event} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default EventCard;
