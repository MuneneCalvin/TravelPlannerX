import { useState } from 'react';

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

      <label htmlFor="destination">Destination:</label>
      <input type="text" id="destination" value={destination} onChange={handleDestinationChange} />

      <label htmlFor="days">Number of days:</label>
      <input type="number" id="days" value={days} onChange={handleDaysChange} />

      <button onClick={handlePlanTrip}>Plan Trip</button>

      {tripData && (
        <div>
          <h2>Trip Details</h2>
          <div className='Detail-card'>
          <ul>
            {tripData.plan.map((day) => (
              <li key={day.day}>
                <h3>Day {day.day}</h3>
                <div className='card-activities'>
                <ul>
                  {day.activities.map((activity) => (
                    <li key={activity.time}>
                      <strong>{activity.time}:</strong> {activity.description}
                    </li>
                  ))}
                </ul>
                </div>
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
