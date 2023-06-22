import { useEffect, useState } from 'react';
import './Flights.css';

function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8086/flights')
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='flight-container'>
      <header id='flight-page' className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>Book Your Flight</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>
      
      <section id='flight'>
      <table>
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Seats Available</th>
            <th>Flight Price</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.FlightName}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.start_date}</td>
              <td>{flight.end_date}</td>
              <td>{flight.Duration}</td>
              <td>{flight.seats_available}</td>
              <td>{flight.FlightPrice}</td>
              <td>
                <button className="book-now-button">Book Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  );
}

export default Flights;
