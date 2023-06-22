import { useState, useEffect } from 'react';
import './Destinations.css';

const DestinationsList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8086/destinations')
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error(error));

  }, []);

  const handleBookNow = (destination) => {
    // Implement your book now logic here
    console.log('Book Now:', destination);
  };

  return (
    <main>
      <div>
      <header id='destinations' className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>Book Your Destination:</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>

      <div id='Destination' className="destinations-container">
      {destinations.map((destination) => (
        <div className="destination-card" key={destination._id}>
          <h2>{destination.DesName}</h2>
          <p>{destination.Description}</p>
          <img src={destination.DesImage_url} alt={destination.DesName} />
          <p className="price">Price: ${destination.DesPrice}</p>
          <button className="book-now-btn" onClick={() => handleBookNow(destination)}>Book Now</button>
        </div>
      ))}
    </div>
      </div>
    </main>
    
  );
}

export default DestinationsList;
