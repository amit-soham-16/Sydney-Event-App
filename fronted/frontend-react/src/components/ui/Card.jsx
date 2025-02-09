
import React from "react";
import { Button } from "./Button";

export function Card({ title, image, date, venue, price, onClick }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white text-black border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="relative w-full h-52">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-full">
          {date}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{venue}</p>
        <p className="text-gray-900 text-md font-semibold mt-1">{price}</p>
        <Button className="mt-4 w-full" onClick={onClick}>
          Get Tickets
        </Button>
      </div>
    </div>
  );
}
