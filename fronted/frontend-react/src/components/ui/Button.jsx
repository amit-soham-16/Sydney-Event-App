import React from "react";

export function Button({ children, onClick, className }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition ${className}`}
      >
        {children}
      </button>
    );
  }
  
