import { useState, useEffect } from 'react';
import './Hotels.css';

function Hotels() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [hotelData, setHotelData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${searchQuery}&checkIn=${checkInDate}&checkOut=${checkOutDate}&pageNumber=1&currencyCode=USD`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bb5683bf3cmsh9b501cf1ec358a1p128823jsn34341b886d59',
          'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
        }
      };

      setIsLoading(true);

      try {
        // Make HTTP request and wait for response
        const response = await fetch(url, options);

        // Parse JSON data from API response
        const data = await response.json();
        const hotelsData = data?.data?.data || [];

        // Update state with hotels data
        setHotelData(hotelsData);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    if (searchQuery && checkInDate && checkOutDate) {
      fetchHotels();
    }
  }, [searchQuery, checkInDate, checkOutDate]);

  const handleBooking = () => {
    // Handle booking logic for the selected hotel
    // This could be a separate function or navigate to a booking page
    // based on your application's requirements
    console.log('Booking:', hotelData[0]);
  };

  return (
    <div>
      <header className='flex'>
        <div className='container'>
          <div className='header-title'>
            <h1>Accommodations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, corrupti sint. Ut accusantium repudiandae voluptatum?</p>
          </div>
          <div className='header-form-hotel'>
            <h2>Choose Your Accommodation</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setSearchQuery(e.target.elements.geoId.value);
              setCheckInDate(e.target.elements.checkInDate.value);
              setCheckOutDate(e.target.elements.checkOutDate.value);
            }}>
              <input type="text" className='form-control' name="geoId" placeholder="Enter geoId" />
              <input type="date" className='form-control' name="checkInDate" placeholder='Check In Date' />
              <input type="date" className='form-control' name="checkOutDate" placeholder='Check Out Date' />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </header>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='hotel'>
          {hotelData.map((hotel) => (
            <div key={hotel.id} className='hotel-card'>
              <h2 className='hotel-title'>{hotel.title}</h2>
              {hotel.cardPhotos[0] && (
                <img
                  src={hotel.cardPhotos[0].sizes.urlTemplate.replace('{width}', '100').replace('{height}', '100')}
                  alt={hotel.title}
                />
              )}
              <p>{hotel.secondaryInfo}</p>
              <p>Price: {hotel.priceForDisplay}</p>
              <button onClick={handleBooking}>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Hotels;
