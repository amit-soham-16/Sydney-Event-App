import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { useState } from "react";
import EventModal from "./EventModal";

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className="max-w-sm rounded-2xl shadow-lg p-4">
        <img src={event.image} alt={event.title} className="rounded-xl h-48 w-full object-cover" />
        <h3 className="text-xl font-bold mt-4">{event.title}</h3>
        <p className="text-gray-600">{event.date} | {event.location}</p>
        <Button className="mt-4 w-full" onClick={() => setShowModal(true)}>
          Get Tickets
        </Button>
      </Card>
      {showModal && <EventModal event={event} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default EventCard;
