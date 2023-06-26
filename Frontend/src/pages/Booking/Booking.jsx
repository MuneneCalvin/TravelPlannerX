import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/userContext/Context';
import userimg from '../../images/user.png'
import dashboard from '../../images/dashboard.png'
import reports from '../../images/reports.png'
import messages from '../../images/messages.png'
import projects from '../../images/projects.png'
import members from '../../images/members.png'
import setting from '../../images/setting.png'
import logout from '../../images/logout.png'
import './Booking.css'
import Profile from '../../components/Profile/profile';

function Booking() {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(Context);
    const [booking, setBooking] = useState([]);
    const [activeTab, setActiveTab] = useState("bookings");
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ UserId: user.id, BookingDate: '', check_in_date: '', check_out_date: '', FlightId: '', AccId: '', total_price: '', status: '' });

    useEffect(() => {
            fetch(`http://localhost:8080/bookings/${user.id}`)
            .then((response) => response.json())
            .then((data) => {
                setBooking(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [user]);

    const handleDelete = (bookingId) => {
        fetch(`http://localhost:8080/booking/${bookingId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Booking with ID: ${bookingId} deleted`);
                    alert("Booking Deleted Successfully");
                } else {
                    console.error('Error:', response);
                    alert("Booking Not Deleted");
                }
            })
            .catch ((error) => {
                console.error('Error:', error);
                alert("Booking Not Deleted");
            })
    };
    
    // const handleEdit = (id) => {
    //     console.log(`Edit booking with ID: ${id}`);
    // };

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/Home");
    }

    const handleMyBookingsClick = () => {
        setActiveTab("bookings");
    };

    const handleMyProfileClick = () => {
        setActiveTab("profile");
    };

    const handleBooking = () => {
        setActiveTab("Booking");
    };

    const handleNavigateToBookingForm = () => {
        setActiveTab("Booking");
    };

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`http://localhost:8080/bookings/${user.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => {
            if (response.ok) {
                console.log('Booking Added Successfully');
                alert("Booking Added Successfully");
                navigate('/payment');
            } else {
                console.error('Error:', response);
                alert("Booking Not pushed");
            }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Booking Not Added");
            });

            setFormData({ UserId: user.id, BookingDate: '', check_in_date: '', check_out_date: '', FlightId: '', AccId: '', total_price: '', status: '' })
    };

    return (
        <div id='Header'>
            <div className="side-nav">
                <div className="user">
                    <img src={userimg} className='user-img' />
                    <div className='user-details'>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <ul>
                    <li><img src={dashboard} /><Link onClick={handleBooking} className='side-link'>Book Now</Link></li>
                    <li><img src={reports} /><Link onClick={handleMyBookingsClick} className='side-link'>My Bookings</Link></li>
                    <li><img src={messages} /><Link to="/Contact" className='side-link'>Contact Us</Link></li>
                    <li><img src={projects} /><Link to="/About" className='side-link'>About Us</Link></li>
                    <li><img src={members} /><Link onClick={handleMyProfileClick} className='side-link'>My Profile</Link></li>
                    <li><img src={setting} /><Link to="/Setting" className='side-link'>Settings</Link></li>
                </ul>
                <ul>
                    <li><img src={logout} /><Link onClick={handleLogout} className='log-out'>Log Out</Link></li>
                </ul>
            </div>

            <div className='main-nav'>
            {activeTab === "Booking" && (
                    <>
                        <h2>Booking:</h2>
                        <div className='booking-form-container'>
                            {loading ? (
                                <div className="loading">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            ) : (
                                <form className='booking-form-card' onSubmit={handleSubmit}>
                                
                                <div className='booking-form'>
                                    <label>Booking Date:</label>
                                    <input className='input-field' type='date' id='bookingDate' name='BookingDate' value={formData.BookingDate} onChange={handleInputChange} />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkInDate'>Check In Date:</label>
                                    <input className='input-field' type='date' id='checkInDate' name='check_in_date' value={formData.check_in_date} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkOutDate'>Check Out Date:</label>
                                    <input className='input-field' type='date' id='checkOutDate' name='check_out_date' value={formData.check_out_date} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='flightId'>Flight Id:</label>
                                    <input className='input-field' type='number' id='flightId' name='FlightId' placeholder='Enter the Flight No' value={formData.FlightId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='accId'>Accommodation Id:</label>
                                    <input className='input-field' type='number' id='accId' name='AccId' placeholder='Enter the Hotel No ' value={formData.AccId} onChange={handleInputChange} required />
                                    
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='totalPrice'>Total Price:</label>
                                    <input className='input-field' type='number' id='totalPrice' name='total_price' value={formData.total_price} onChange={handleInputChange} required  />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='bookingStatus'>Status:</label>
                                    <select className='input-field' type='text' id='status' name='status' value={formData.status} onChange={handleInputChange} required>
                                        <option value='Pending'>Pending</option>
                                        <option value='Confirmed'>Confirmed</option>
                                        <option value='Cancelled'>Cancelled</option>
                                    </select>
                                </div>

                                <button className='btn-submit' type='submit'><span>Book Now</span></button>
                            </form>
                            )}
                        </div>
                    </>
                )}

                {activeTab === "bookings" && (
                    <>
                        <h2>My Bookings:</h2>
                    
                        {loading ? (
                            <div className='booking-load'>
                                <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                    <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                                    <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                                    <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                    <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                </svg>
                            </div>
                        ) : booking.length === 0 ? (
                            <div className='Bookings'>
                                <p>You have no bookings at the moment.</p>
                                <button className='add-booking' onClick={handleNavigateToBookingForm}>Add Booking</button>
                            </div>
                        ) : (
                        <div className="booking-container">
                            {booking.map((booking) => (
                                <div className='booking-card' key={booking.BookingId}>
                                    {/* <p>Booking ID: {booking.BookingId}</p> */}
                                    <p>Booking Date: {booking.BookingDate}</p>
                                    <p>Status: {booking.status}</p>
                                    <p>Flight Id: {booking.FlightId}</p>
                                    <p>Accommodation Id: {booking.AccId}</p>
                                    <p>Price: {booking.total_price}</p>
                                    <div className='button-container'>
                                        {/* <button className='edit-button' onClick={() => handleEdit(booking.BookingId)}>Edit</button> */}
                                        <button className="del-button" onClick={() => handleDelete(booking.BookingId)}>
                                            <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        )}
                    </>
                )}
                
                {activeTab === "profile" && (
                    <>
                        <h2>My Profile:</h2>
                        <div className='profile-container'>
                        <Profile />
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default Booking
