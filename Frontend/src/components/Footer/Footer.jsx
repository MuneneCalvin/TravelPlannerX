import './Footer.css';

function Footer() {
    return (
        <footer className = "py-4">
            <div className = "container footer-row">
                <div className = "footer-item">
                    <a href = "index.html" className = "site-brand">
                        Travel<span>Xplorer</span>
                    </a>
                    <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates maiores nam vitae iusto. Placeat rem sint voluptas natus exercitationem autem quod neque, odit laudantium reiciendis ipsa suscipit veritatis voluptate.</p>
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
                            <a href = "#">
                                <i className = "fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-pinterest"></i>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-google-plus"></i>
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
                        <input type = "email" placeholder="Enter Email" className = "form-control" />
                        <input type = "submit" className = "btn" value = "Subscribe" />
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;