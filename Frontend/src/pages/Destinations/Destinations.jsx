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
















/*import { useState } from 'react';
import './Destinations.css';

function Destination () {
  const [days, setDays] = useState(0);
  const [destination, setDestination] = useState('');
  const [tripData, setTripData] = useState(null);

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handlePlanTrip = async () => {
    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${days}&destination=${encodeURIComponent(destination)}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bb5683bf3cmsh9b501cf1ec358a1p128823jsn34341b886d59',
        'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTripData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header id='destinations' className='flex'>
        <div className='container'>
          <div className='header-title'>
            <h1>Plan Your Destination</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti sint. Ut accusantium repudiandae voluptatum?</p>
          </div>
          <div className='header-form-dest'>
            <h2>Choose Your Destination:</h2>
            <form>
              <label htmlFor="destination">Destination:</label>
              <input type="text" className='form-control' id="destination" value={destination} onChange={handleDestinationChange} />

              <label htmlFor="days">Number of days:</label>
              <input type="number" className='form-control' id="days" value={days} onChange={handleDaysChange} />

              <button onClick={handlePlanTrip}>Plan Trip</button>
            </form>
          </div>
        </div>
      </header>

      {tripData && (
        <div id='destination'>
          <h2>Trip Details</h2>
          <div className='Detail-card'>
          <ul>
            {tripData.plan.map((day) => (
              <li key={day.day}>
                <h3>Day {day.day}</h3>
                <ul>
                  {day.activities.map((activity) => (
                    <li key={activity.time}>
                      <strong>{activity.time}:</strong> {activity.description}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Destination;
*/
