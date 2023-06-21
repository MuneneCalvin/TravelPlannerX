import { useEffect, useState } from 'react';
import axios from 'axios';
import './Destinations.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8084/destinations');
        setDestinations(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleBookNow = (destinationName) => {
    // Handle the book now action, such as redirecting to a booking page or displaying a modal
    console.log(`Book now clicked for destination: ${destinationName}`);
  };

  return (
    <div>
      {destinations.map((destination) => (
        <div key={destination.DesName} className="destination-card">
          <h2>{destination.DesName}</h2>
          <p>{destination.Description}</p>
          <img src={destination.DesImage_url} alt={destination.DesName} />
          <p className="price">Price: ${destination.DesPrice}</p>
          <button
            className="book-now-button"
            onClick={() => handleBookNow(destination.DesName)}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Destinations;
