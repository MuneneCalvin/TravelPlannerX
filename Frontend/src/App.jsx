import { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cruiseDetails, setCruiseDetails] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/cruises/searchCruises', {
        headers: {
          'x-rapidapi-key': 'e3048ed846msh581428970c13ed8p1ad7fdjsn344b987e0e6b',
          'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com',
        },
        params: {
          q: searchQuery,
        },
      });

      if (response.data && response.data.results && response.data.results.length > 0) {
        const cruise = response.data.results[0];
        setCruiseDetails(cruise);
      } else {
        setCruiseDetails(null);
      }
    } catch (error) {
      console.log(error);
      setCruiseDetails(null);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Welcome to TravelPlanner!</h1>
        <p>Plan your dream cruise vacation with us.</p>
      </header>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a cruise destination..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {cruiseDetails && (
        <div className="cruise-details">
          <h2>Cruise Details</h2>
          <div className="cruise-card">
            <h3>{cruiseDetails.title}</h3>
            <p>Cruise Line: {cruiseDetails.cruiseLine.name}</p>
            <img src={cruiseDetails.cruiseLine.logoUrl} alt={cruiseDetails.cruiseLine.name} />
            <p>Ship: {cruiseDetails.ship.name}</p>
            <img src={cruiseDetails.ship.imageUrl} alt={cruiseDetails.ship.name} />
            <p>Destination: {cruiseDetails.destination.name}</p>
            <img src={cruiseDetails.destination.imageUrl} alt={cruiseDetails.destination.name} />
            <p>Departure Port: {cruiseDetails.portDeparture.name}</p>
            <p>Arrival Port: {cruiseDetails.portArrival.name}</p>
            <p>Departure Date: {cruiseDetails.sailings.results[0].departureDate}</p>
            <p>Passenger Capacity: {cruiseDetails.passengerCapacity}</p>
            <p>Amenities: {cruiseDetails.amenities.join(', ')}</p>
            <p>Overall Rating: {cruiseDetails.snippets.reviewSummaryInfo.overallRatings}</p>
            <p>Number of Reviews: {cruiseDetails.snippets.reviewSummaryInfo.numberReviews}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
