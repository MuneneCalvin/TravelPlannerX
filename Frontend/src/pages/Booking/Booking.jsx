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
    const [formData, setFormData] = useState({ UserId: '', bookingDate: '', checkInDate: '', checkOutDate: '', flightId: '', accId: '', totalPrice: '', status: '' });

    useEffect(() => {
            fetch(`http://localhost:8080/bookings/${user.id}`)
            .then((response) => response.json())
            .then((data) => setBooking(data))
            .catch((error) => console.error(error));
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
        setFormData({...formData,[event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:8080/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => {
            if (response.ok) {
                console.log('Booking Added Successfully');
                alert("Booking Added Successfully");
            } else {
                console.error('Error:', response);
                alert("Booking Not pushed");
            }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Booking Not Added");
            });

            setFormData({ UserId: '', BookingDate: '', checkInDate: '', checkOutDate: '', flightId: '', accId: '', totalPrice: '', status: '' })
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
                {activeTab === "bookings" && (
                    <>
                        <h2>My Bookings:</h2>
                        <div className='booking-container'>
                            {booking.map((booking) => (
                                <div className='booking-card' key={booking.BookingId}>
                                    {/* <p>Booking ID: {booking.BookingId}</p> */}
                                    <p>Booking Date: {booking.BookingDate}</p>
                                    <p>Status: {booking.status}</p>
                                    <p>Flight: {booking.FlightId}</p>
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
                        <Profile />
                        </div>
                    </>
                )}

                {activeTab === "Booking" && (
                    <>
                        <h2>Booking:</h2>
                        <div className='booking-form-container'>
                            <form className='booking-form-card' onSubmit={handleSubmit}>
                                <div className='booking-form'>
                                    <label htmlFor='UserId'>User Id:</label>
                                    <input className='input-field' type='number' id='UserId' name='UserId' value={formData.UserId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label>Booking Date:</label>
                                    <input className='input-field' type='date' id='BookingDate' name='BookingDate' value={formData.BookingDate} onChange={handleInputChange} />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkInDate'>Check In Date:</label>
                                    <input className='input-field' type='date' id='check_in_date' name='check_in_date' value={formData.check_in_date} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='checkOutDate'>Check Out Date:</label>
                                    <input className='input-field' type='date' id='check_out_date' name='check_out_date' value={formData.check_out_date} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='flightId'>Flight Id:</label>
                                    <input className='input-field' type='number' id='flightId' name='FlightId' value={formData.FlightId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='accId'>Accommodation Id:</label>
                                    <input className='input-field' type='number' id='AccId' name='AccId' value={formData.AccId} onChange={handleInputChange} required />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='totalPrice'>Total Price:</label>
                                    <input className='input-field' type='number' id='total_price' name='total_price' value={formData.total_price} onChange={handleInputChange} required  />
                                </div>
                                <div className='booking-form'>
                                    <label htmlFor='bookingStatus'>Status:</label>
                                    <input className='input-field' type='text' id='status' name='status' value={formData.status} onChange={handleInputChange} required />
                                </div>

                                <button className='btn-submit' type='submit'><span>Book Now</span></button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Booking
