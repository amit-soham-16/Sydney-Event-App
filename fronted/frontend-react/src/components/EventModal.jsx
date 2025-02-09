import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

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
    <div className="modal-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="modal-content"
      >
        <h2 className="modal-title">Get Tickets for {event.title}</h2>
        <p className="modal-subtitle">Enter your email to proceed:</p>

        <input
          type="email"
          placeholder="Enter your email"
          className="modal-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button className="modal-button" onClick={handleSubmit}>
          Proceed
        </Button>

        <button className="modal-cancel" onClick={onClose}>
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default EventModal;
