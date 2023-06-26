import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Destinations.css';

const DestinationsList = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/destinations')
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

  }, []);

  const handleBookNow = () => {
    navigate('/Booking');
  };

  return (
    <main>
      <div>
      <header id='destinations' className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>Book Your Destination:</h1>
                    <p>Explore a world of enchanting destinations, from breathtaking natural wonders to vibrant cultural hubs, and embark on a journey of discovery and awe.</p>
                </div>
            </div>
        </header>

      <div id='Destination' className="destinations-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        destinations.map((destination) => (
          <div className="destination-card" key={destination._id}>
            <h2>{destination.DesId}. {destination.DesName}</h2>
            <p>{destination.Description}</p>
            <img src={destination.DesImage_url} alt={destination.DesName} />
            <p className="price">Price: ${destination.DesPrice}</p>
            <button className="book-now-btn" onClick={() => handleBookNow(destination)}>Book Now</button>
          </div>
        ))
      )}
    </div>
      </div>
    </main>
    
  );
}

export default DestinationsList;
