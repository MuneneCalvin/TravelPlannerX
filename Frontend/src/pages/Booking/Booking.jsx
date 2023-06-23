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

function Booking() {
    const navigate = useNavigate();
    const { user, dispatch } = useContext(Context);
    const [userDetails, setUserDetails] = useState([]);
    const [booking, setBooking] = useState([]);
    const [activeTab, setActiveTab] = useState("bookings");
    const [formData, setFormData] = useState({ checkInDate: '', checkOutDate: '', flightId: '', accId: '', totalPrice: 0, });

    useEffect(() => {
        setUserDetails(user);
    }, []);

    useEffect(() => {
        fetch('http://localhost:8086/bookings')
            .then((response) => response.json())
            .then((data) => setBooking(data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (bookingId) => {
        fetch(`http://localhost:8086/booking/${bookingId}`, {
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
    
    const handleEdit = (id) => {
        // Handle edit operation for the booking with the specified id
        // You can navigate to an edit page or show a modal for editing
        console.log(`Edit booking with ID: ${id}`);
    };

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Submitted");
        alert("Booking Submitted");
    };

    return (
        <div id='Header'>
            <div className="side-nav">
                <div className="user">
                    <img src={userimg} className='user-img' />
                    <div className='user-details'>
                        <h2>Calvin Shawn</h2>
                        <p>Munenecalcn@gmail.com</p>
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
                {activeTab === "bookings" && (
                    <>
                        <h2>My Bookings:</h2>
                        <div className='booking-container'>
                            {booking.map((booking) => (
                                <div className='booking-card' key={booking.BookingId}>
                                    <p>Booking ID: {booking.BookingId}</p>
                                    <p>Booking Date: {booking.BookingDate}</p>
                                    <p>Status: {booking.BookingStatus}</p>
                                    <p>Accommodation: {booking.AccId}</p>
                                    <p>Price: {booking.total_price}</p>
                                    <div className='button-container'>
                                        <button onClick={() => handleEdit(booking.BookingId)}>Edit</button>
                                        <button onClick={() => handleDelete(booking.BookingId)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                
                {activeTab === "profile" && (
                    <>
                        <h2>My Profile:</h2>
                        <div className='profile-container'>
                            <img src={userimg} className='profile-img' />
                        <div className='profile-card'>
                        <div className='profile-details'>
                            <h2>{userDetails.userName}</h2>
                            <p>{userDetails.Email}</p>
                        </div>
                        </div>
                        </div>
                    </>
                )}

                {activeTab === "Booking" && (
                    <>
                        <h2>Booking:</h2>
                        <div className='booking-form-container'>
                            <form className='booking-form-card' onSubmit={handleSubmit}>
                                <div className='booking-form'>
                                    <label>Booking Date:</label>
                                    <input type='date' value={formData.bookingId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkInDate'>Check In Date:</label>
                                    <input type='date' value={formData.checkInDate} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkOutData'>Check Out Date:</label>
                                    <input type='date' value={formData.checkOutDate} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='flightId'>Flight Id:</label>
                                    <input type='number' value={formData.flightId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='accId'>Accommodation Id:</label>
                                    <input type='number' value={formData.accId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='totalPrice'>Total Price:</label>
                                    <input type='number' value={formData.totalPrice} onChange={handleInputChange}  required />
                                </div>
                                <button className='submit-btn' onChange={handleInputChange} type='submit'>Book Now</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Booking
