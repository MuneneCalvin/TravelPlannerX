import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/userContext/Context';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/Home");
    }

    return (
        <nav className="navbar">
            <div className="container flex">
                <a href="#" className="site-brand">
                    Travel<span>Xplorer</span>
                </a>

                <button type="button" id="navbar-show-btn" className="flex">
                    <i className="fas fa-bars"></i>
                </button>
                <div id="navbar-collapse">
                    <button type="button" id="navbar-close-btn" className="flex">
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/Flights" className="nav-link">Flights</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Cruises" className="nav-link">Cruises</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Hotels" className="nav-link">Hotels</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact" className="nav-link">Contact</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link onClick={handleLogout} className="nav-link">Log Out</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='nav-item'>
                                    <Link to="/SignIn" className="nav-link">Register</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/Login" className="nav-link">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
