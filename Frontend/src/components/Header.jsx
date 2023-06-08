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
                        <li><Link to="/sport" className = "nav-link">Sports</Link></li>
                    </li>
                    <li className = "nav-item">
                        <li><Link to="/business" className = "nav-link">Business</Link></li>
                    </li>
                    <li className = "nav-item">
                        <li><Link to="/technology" className = "nav-link">Technology</Link></li>
                    </li>
                    <li className = "nav-item">
                        <a href = "contact.html" className = "nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;