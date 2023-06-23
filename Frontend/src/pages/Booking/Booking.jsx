import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/userContext/Context';
import userimg from '../../images/user.png'
import dashboard from '../../images/dashboard.png'
import reports from '../../images/reports.png'
// import rewards from '../../images/rewards.png'
import messages from '../../images/messages.png'
// import video from '../../images/video-chat.png'
import projects from '../../images/projects.png'
import members from '../../images/members.png'
import setting from '../../images/setting.png'
import logout from '../../images/logout.png'
import './Booking.css'

function Booking() {
    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    const [booking, setBooking] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8086/bookings')
            .then((response) => response.json())
            .then((data) => setBooking(data))
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (BookingId) => {
        fetch(`http://localhost:8086/booking/${BookingId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Booking with ID: ${BookingId} deleted`);
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
                    <li><img src={dashboard} /><Link to="/Dashboard">Dashboard</Link></li>
                    <li><img src={reports} /><Link to="/Booking">My Booking</Link></li>
                    {/* <li><img src={rewards} /><p>Rewards</p></li> */}
                    <li><img src={messages} /><Link to="/Contact">Contact Us</Link></li>
                    {/* <li><img src={video} /><p>Video Chat</p></li> */}
                    <li><img src={projects} /><Link to="/Gallery">Gallery</Link></li>
                    <li><img src={members} /><Link to="/Profile">My Profile</Link></li>
                    <li><img src={setting} /><Link to="/Setting">Settings</Link></li>
                </ul>
                <ul>
                    <li><img src={logout} /><Link onClick={handleLogout}>Log Out</Link></li>
                </ul>
            </div>

            <div className='main-nav'>
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
            </div>
        </div>
    )
}

export default Booking