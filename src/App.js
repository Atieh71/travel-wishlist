import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Wishlist from "./components/Wishlist";
import "./App.css";

function App() {
  const [destinations, setDestinations] = useState([]);

  const handleAddDestination = (newDestination) => {
    setDestinations([...destinations, newDestination]);
  };

  const handleDeleteDestination = (index) => {
    const updatedDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(updatedDestinations);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  destinations={destinations}
                  onAddDestination={handleAddDestination}
                  onDelete={handleDeleteDestination}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
