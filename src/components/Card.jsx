import React from "react";

const Card = ({ title, description, className , ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md p-6 ${className}`}
    >
      <h2 className="text-xl font-semibold mb-2 ">{title}</h2>
      <p className="text-purple-600">{description}</p>
    </div>
  );
};

export default Card;
