import { useEffect, useState } from 'react';

const App = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Flight Data</h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;



/*import { useState, useEffect } from 'react';

function Flights() {
  const [sourceAirportCode, setSourceAirportCode] = useState('BOM');
  const [destinationAirportCode, setDestinationAirportCode] = useState('DEL');
  const [date, setDate] = useState('2023-06-22');
  const [itineraryType, setItineraryType] = useState('ROUND_TRIP');
  const [sortOrder, setSortOrder] = useState('PRICE');
  const [numAdults, setNumAdults] = useState(1);
  const [numSeniors, setNumSeniors] = useState(1);
  const [classOfService, setClassOfService] = useState('PREMIUM_ECONOMY');
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFlights = async () => {
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${date}&itineraryType=${itineraryType}&sortOrder=${sortOrder}&numAdults=${numAdults}&numSeniors=${numSeniors}&classOfService=${classOfService}&pageNumber=1&currencyCode=USD`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bb5683bf3cmsh9b501cf1ec358a1p128823jsn34341b886d59',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
        },
      };

      setIsLoading(true);

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = result?.data?.data || [];
        setFlights(data);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    if (sourceAirportCode && destinationAirportCode && date && itineraryType && sortOrder && numAdults && numSeniors && classOfService) {
      fetchFlights();
    }
  }, [sourceAirportCode, destinationAirportCode, date, itineraryType, sortOrder, numAdults, numSeniors, classOfService]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchFlights();
  };

  const handleBooking = (flight) => {
    console.log('Booking:', flight);
  };

  return (
    <div>
      <h1>Flights</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="sourceAirport">Source Airport:</label>
          <input
            type="text"
            id="sourceAirport"
            value={sourceAirportCode}
            onChange={(e) => setSourceAirportCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="destinationAirport">Destination Airport:</label>
          <input
            type="text"
            id="destinationAirport"
            value={destinationAirportCode}
            onChange={(e) => setDestinationAirportCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="itineraryType">Itinerary Type:</label>
          <select
            id="itineraryType"
            value={itineraryType}
            onChange={(e) => setItineraryType(e.target.value)}
          >
            <option value="ONE_WAY">One Way</option>
            <option value="ROUND_TRIP">Round Trip</option>
            <option value="MULTI_CITY">Multi-City</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortOrder">Sort Order:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="PRICE">Price</option>
            <option value="DURATION">Duration</option>
            <option value="ML_BES_VALUE">Best Value</option>
            <option value="EARLIEST_OUTBOUND_DEPARTURE">Earliest Outbound Departure</option>
            <option value="EARLIEST_OUTBOUND_ARRIVAL">Earliest Outbound Arrival</option>
            <option value="LATEST_OUTBOUND_DEPARTURE">Latest Outbound Departure</option>
            <option value="LATEST_OUTBOUND_ARRIVAL">Latest Outbound Arrival</option>
          </select>
        </div>
        <div>
          <label htmlFor="numAdults">Number of Adults:</label>
          <input
            type="number"
            id="numAdults"
            value={numAdults}
            onChange={(e) => setNumAdults(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numSeniors">Number of Seniors:</label>
          <input
            type="number"
            id="numSeniors"
            value={numSeniors}
            onChange={(e) => setNumSeniors(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="classOfService">Class of Service:</label>
          <select
            id="classOfService"
            value={classOfService}
            onChange={(e) => setClassOfService(e.target.value)}
          >
            <option value="FIRST">First</option>
            <option value="BUSINESS">Business</option>
            <option value="PREMIUM_ECONOMY">Premium Economy</option>
            <option value="ECONOMY">Economy</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {flights.map((flight) => (
            <div key={flight.flightId} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }} className="flight-card">
              <p>Flight ID: {flight.flightId}</p>
              <p>Origin: {flight.segments[0].legs[0].originStationCode}</p>
              <p>Destination: {flight.segments[0].legs[0].destinationStationCode}</p>
              <p>Departure: {flight.segments[0].legs[0].departureDateTime}</p>
              <p>Arrival: {flight.segments[0].legs[0].arrivalDateTime}</p>
              <p>Total Price: {flight.totalPrice}</p>
              <button onClick={() => handleBooking(flight)}>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Flights;
*/
