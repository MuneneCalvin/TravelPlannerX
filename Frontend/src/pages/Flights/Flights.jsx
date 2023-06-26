import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Flights.css';

function Flights() {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/flights')
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error(error));
  }, []);

  const handleBook = (flight) => {
    console.log('Book Now:', flight);
    navigate('/Booking');
  };

  return (
    <div className='flight-container'>
      <header id='flight-page' className='flex header-sm'>
        <div className='container'>
          <div className='header-title'>
            <h1>Book Your Flight</h1>
            <p>
              Discover the freedom of the skies as you search and book from a wide selection of flights to your dream
              destinations, ensuring a seamless and exhilarating travel experience.
            </p>
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
                <td>
                  {flight.FlightId}. {flight.FlightName}
                </td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.start_date}</td>
                <td>{flight.end_date}</td>
                <td>{flight.Duration}</td>
                <td>{flight.seats_available}</td>
                <td>{flight.FlightPrice}</td>
                <td>
                  <button className='book-now-button' onClick={() => handleBook(flight)}>
                    Book Now
                  </button>
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
