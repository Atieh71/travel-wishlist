import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        This is a travel wishlist app where you can add your favorite destinations along with their weather and photos.
      </p>
      <h3>My Dream Destination</h3>
      <div className="dream-destination">
        <img 
          src="/pics/masal.jpg" 
          alt="Masal, Iran" 
          className="dream-image"
        />
        <p>
          One of my dream destinations is **Masal**, a beautiful small city in Iran. Known for its breathtaking green 
          landscapes, dense forests, and misty hills, Masal is a paradise for nature lovers. It’s a peaceful retreat 
          away from the hustle and bustle, offering tranquility and unmatched natural beauty.
        </p>
      </div>
    </div>
  );
}




export default About;

