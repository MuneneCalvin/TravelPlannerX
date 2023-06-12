import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
    <nav className = "navbar">
        <div className = "container flex">
            <a href = "#" className = "site-brand">
                Travel<span>Xplorer</span>
            </a>

            <button type = "button" id = "navbar-show-btn" className = "flex">
                <i className = "fas fa-bars"></i>
            </button>
            <div id = "navbar-collapse">
                <button type = "button" id = "navbar-close-btn" className = "flex">
                    <i className = "fas fa-times"></i>
                </button>
                <ul className = "navbar-nav">
                        <li><Link to="/" className = "nav-link">Home</Link></li>
                    <li className = "nav-item">
                        <li><Link to="/Flights" className = "nav-link">Flights</Link></li>
                    </li>
                    <li className = "nav-item">
                        <li><Link to="/Cruises" className = "nav-link">Cruises</Link></li>
                    </li>
                    <li className = "nav-item">
                        <li><Link to="/Hotels" className = "nav-link">Hotels</Link></li>
                    </li>
                    <li className = "nav-item">
                        <Link to="/Contact" className = "nav-link">Contact</Link>
                    </li>
                    {/* <li className = "nav-item">
                        <Link to="/SignIn" className = "nav-link">Sign In</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;