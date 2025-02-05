import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from './ui/Card';
import { Button } from './ui/Button';


const EventModal = ({ event, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      window.open(event.link, "_blank");
      onClose();
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Get Tickets for {event.title}</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className="w-full" onClick={handleSubmit}>
          Proceed
        </Button>
        <button className="mt-2 text-sm text-gray-500" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EventModal;
