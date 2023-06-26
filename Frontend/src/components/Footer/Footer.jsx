import './Footer.css';


function Footer() {
    const handleSubscribe = (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
    };

    return (
        <footer className = "py-4">
            <div className = "container footer-row">
                <div className = "footer-item">
                    <a href = "index.html" className = "site-brand">
                        Travel<span>Xplorer</span>
                    </a>
                    <p className = "text">But we are more than just a booking platform – we are a community of passionate travelers who are eager to share their stories, recommendations, and insights. Connect with like-minded explorers through our forum, where you can seek advice, exchange travel tales, and forge lifelong friendships</p>
                </div>

                <div className = "footer-item">
                    <h2>Follow us on: </h2>
                    <ul className = "social-links">
                        <li>
                            <a href = "#">
                                <i className = "fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.instagram.com/__future.west__">
                                <i className = "fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.linkedin.com/in/calvin-munene/">
                                <i className = "fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "https://munenecal.netlify.app/">
                                <i className = "fa fa-globe"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className = "footer-item">
                    <h2>Popular Places:</h2>
                    <ul>
                        <li><a href = "#">Thailand</a></li>
                        <li><a href = "#">Australia</a></li>
                        <li><a href = "#">Maldives</a></li>
                        <li><a href = "#">Switzerland</a></li>
                        <li><a href = "#">Germany</a></li>
                    </ul>
                </div>

                <div className = "subscribe-form footer-item">
                    <h2>Subscribe for Newsletter!</h2>
                    <form className = "flex">
                        <input type = "email" placeholder="Enter Email" className = "form-control" required />
                        <input type = "submit" className = "btn" value = "Subscribe" onClick={handleSubscribe} />
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;