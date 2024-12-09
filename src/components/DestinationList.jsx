import React from "react";

const DestinationList = ({ destinations }) => {
  return (
    <div className="destination-list">
      {destinations.length > 0 ? (
        <ul>
          {destinations.map((destination, index) => (
            <li key={index}>{destination}</li>
          ))}
        </ul>
      ) : (
        <p>No destinations added yet.</p>
      )}
    </div>
  );
};

export default DestinationList;
