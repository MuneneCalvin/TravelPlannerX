

import { useEffect, useState } from 'react';
import axios from 'axios'
import './Hotels.css';

const MyComponent = () => {
    const [data, setData] = useState([]);
    // const [location, setLocation] = useState('');
    const [hotel, setHotel] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (hotel) {
            setLoading(true);

            // const searchHotelsOptions = {
            //     method: 'GET',
            //     url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
            //     params: {
            //         geoId: location,
            //         checkIn: checkIn,
            //         checkOut: checkOut,
            //         pageNumber: '1',
            //         Currency : 'USD'
            //     },
            //     headers: {
            //         'x-rapidapi-key': 'e3048ed846msh581428970c13ed8p1ad7fdjsn344b987e0e6b',
            //         'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
            //     }
            // };

            // axios.request(searchHotelsOptions)
            //     .then(response => {
            //         setData(response.data);
            //         setLoading(false);
            //     })
            //     .catch(error => {
            //         console.log('Error in fetching:', error);
            //     });

            const getHotelDetailsOptions = {
                method: 'GET',
                url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails',
                params: {
                    id: hotel,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    Currency : 'USD'
                },
                headers: {
                    'x-rapidapi-key': 'e3048ed846msh581428970c13ed8p1ad7fdjsn344b987e0e6b',
                    'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
                }
            };

            axios.request(getHotelDetailsOptions)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log('Error in fetching:', error);
                }
            );
        }
    }, []);

    const handleSearch = event => {
        event.preventDefault();
        setHotel(event.target.value);
        setLoading(true);
    };

    const handleClear = () => {
        setHotel('');
        // setLocation('');
        setCheckIn('');
        setCheckOut('');
        setData([]);
    };

    return (
    <section>
        <h1>Book Your Hotel</h1>
        <div className='searchbox'>
        {/* <input type = "number" className = "form-control" placeholder="Enter Location ID" value={location} onChange={(event) => setLocation(event.target.value)}/> */}
        <input type = "number" className = "form-control" placeholder="Enter Hotel ID" value={hotel} onChange={(event) => setHotel(event.target.value)}/>
        <input type="date" className='form-control' placeholder='Enter check-In date' value={checkIn} onChange={(event) => setCheckIn(event.target.value)}/>
        <input type="date" className='form-control' placeholder='Enter check-Out date' value={checkOut} onChange={(event) => setCheckOut(event.target.value)}/>
        <button type='button' onClick={handleSearch}>Search</button>
        <button type='button' onClick={handleClear}>Clear</button>
        </div>

        <div>
            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className='box'>
                    {data.length > 0 ? (
                        <ul>
                            {data.map((hotel, index) => (
                                <li key={index}>
                                    <strong>Name:</strong> {hotel.title} <br />
                                    <strong>Tag:</strong> {hotel.tags} <br />
                                    <strong>Address:</strong> {hotel.address} <br />
                                    <strong>Rating:</strong> {hotel.rating} <br />
                                    <strong>Reviews:</strong> {hotel.numberReviews} <br />
                                    <strong>Photos:</strong> <a href={hotel.urlTemplate}>{hotel.urlTemplate}</a>
                                    <strong>Price:</strong> {hotel.priceForDisplay} <br />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className='no-result'>No results found</div>
                    )}
                    </div>
            )}
        </div>
    </section>
    );
};

export default MyComponent;








/*
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Hotels.css';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState('');
    const [hotel, setHotel] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (location) {
            setLoading(true);

            const searchHotelsOptions = {
                method: 'GET',
                url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels',
                params: {
                    geoId: location,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    pageNumber: '1',
                    Currency : 'USD'
                },
                headers: {
                    'x-rapidapi-key': 'e3048ed846msh581428970c13ed8p1ad7fdjsn344b987e0e6b',
                    'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
                }
            };

            axios.request(searchHotelsOptions)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log('Error in fetching:', error);
                });

            const getHotelDetailsOptions = {
                method: 'GET',
                url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/getHotelDetails',
                params: {
                    id: hotel,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    Currency : 'USD'
                },
                headers: {
                    'x-rapidapi-key': 'e3048ed846msh581428970c13ed8p1ad7fdjsn344b987e0e6b',
                    'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
                }
            };

            axios.request(getHotelDetailsOptions)
                .then(response => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log('Error in fetching:', error);
                }
            );
        }
    }, []);

    const handleSearch = event => {
        event.preventDefault();
        setLocation(event.target.value);
        setLoading(true);
    };

    const handleClear = () => {
        setHotel('');
        setLocation('');
        setCheckIn('');
        setCheckOut('');
        setData([]);
    };

    return (
    <section>
        <h1>Book Your Hotel</h1>
        <div className='searchbox'>
        <input type = "number" className = "form-control" placeholder="Enter Location ID" value={location} onChange={(event) => setLocation(event.target.value)}/>
        <input type = "number" className = "form-control" placeholder="Enter Hotel ID" value={hotel} onChange={(event) => setHotel(event.target.value)}/>
        <input type="date" className='form-control' placeholder='Enter check-In date' value={checkIn} onChange={(event) => setCheckIn(event.target.value)}/>
        <input type="date" className='form-control' placeholder='Enter check-Out date' value={checkOut} onChange={(event) => setCheckOut(event.target.value)}/>
        <button type='button' onClick={handleSearch}>Search</button>
        <button type='button' onClick={handleClear}>Clear</button>
        </div>

        <div>
            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <div className='box'>
                    {data.length > 0 ? (
                        <ul>
                            {data.map((hotel, index) => (
                                <li key={index}>
                                    <strong>Name:</strong> {hotel.title} <br />
                                    <strong>Tag:</strong> {hotel.tags} <br />
                                    <strong>Address:</strong> {hotel.address} <br />
                                    <strong>Rating:</strong> {hotel.rating} <br />
                                    <strong>Reviews:</strong> {hotel.numberReviews} <br />
                                    <strong>Photos:</strong> <a href={hotel.urlTemplate}>{hotel.urlTemplate}</a>
                                    <strong>Price:</strong> {hotel.priceForDisplay} <br />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className='no-result'>No results found</div>
                    )}
                    </div>
            )}
        </div>
    </section>
    );
};

export default MyComponent;
*/