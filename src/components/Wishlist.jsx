import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const WEATHER_API_KEY = "1bbce3cd899255ec02dff4f0cc77b83f"; 
const UNSPLASH_API_KEY = "pc5-t9FZOqBXSkJ5m4JkGF24a7VsdpucaKw0WN4tqAw"; 

function Wishlist({ destinations, onAddDestination, onDelete }) {
  const [destination, setDestination] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = destinations.length
      ? `${destinations.length} Destinations Added`
      : "Travel Wishlist";
  }, [destinations]);

  const handleAddDestination = async () => {
    if (!destination) return;

    try {
      
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${WEATHER_API_KEY}&units=metric`
      );

      const weatherData = weatherResponse.data;

  
      const imageResponse = await axios.get(
        `https://api.unsplash.com/search/photos?query=${destination}&client_id=${UNSPLASH_API_KEY}`
      );

      const imageUrl = imageResponse.data.results[0]?.urls.regular || "https://via.placeholder.com/150";

      const newDestination = {
        name: destination,
        weather: weatherData.weather[0].description,
        temperature: `${weatherData.main.temp}°C`,
        imageUrl: imageUrl,
      };

    
      onAddDestination(newDestination);
      setDestination("");
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch data. Please check the city name or try again.");
    }
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">Your Travel Wishlist</h1>

      <div className="add-destination">
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination"
          className="input-field"
        />
        <button onClick={handleAddDestination} className="add-button">
          Add Destination
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {destinations.length === 0 ? (
        <p className="empty-message">No destinations added yet. Start adding some!</p>
      ) : (
        <ul className="card-list">
          {destinations.map((dest, index) => (
            <li key={index} className="card">
              <img
                src={dest.imageUrl}
                alt={dest.name}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{dest.name}</h3>
                <p className="card-text">Weather: {dest.weather}</p>
                <p className="card-text">Temperature: {dest.temperature}</p>
                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
