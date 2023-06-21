// import Navbar from '../components/Header'
import './Contact.css'
// import '../App.css'

function Contact() {
    return (

        <main>
        <header className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>

        <section id = "contact" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">get in touch with us</span>
                    <h2 className = "lg-title">contact us</h2>
                </div>

                <div className = "contact-row">
                    <div className = "contact-left">
                        <form className = "contact-form">
                            <input type = "text" className = "form-control" placeholder="Your name" />
                            <input type = "email" className = "form-control" placeholder="Your email" />
                            <textarea rows = "4" className = "form-control" placeholder="Your message" style = {{resize: "none"}}></textarea>
                            <input type = "submit" className = "btn" value = "Send message" />
                        </form>
                    </div>
                    <div className = "contact-right my-2">
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-phone-alt"></i>
                            </span>
                            <div>
                                <span>Phone</span>
                                <p className = "text2">(+254)795-756638</p>
                            </div>
                        </div>
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-map-marked-alt"></i>
                            </span>
                            <div>
                                <span>Address</span>
                                <p className = "text2">102 Nairobi, Kenya</p>
                            </div>
                        </div>
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-envelope"></i>
                            </span>
                            <div>
                                <span>Message</span>
                                <p className = "text2">info@travelxplorer.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </main>
    )
}

export default Contact;