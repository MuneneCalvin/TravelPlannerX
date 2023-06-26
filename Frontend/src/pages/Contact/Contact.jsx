import { useForm } from '@formspree/react';
import './Contact.css'


function Contact() {
    const [state, handleSubmit] = useForm("mdornagq");
        if (state.succeeded) {
            return <p>Thanks for you Message!</p>;
        }
    return (

        <main>
        <header id='contact-page' className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>Contact Us</h1>
                    <p>We would love to hear from you! Please feel free to reach out to us with any questions, inquiries, or feedback using the contact form below.</p>
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
                        <form className = "contact-form" onSubmit={handleSubmit}>
                            <input type = "text" className = "form-control" placeholder="Your name" />
                            <input type = "email" className = "form-control" placeholder="Your email" />
                            <textarea rows = "4" className = "form-control" placeholder="Your message" style = {{resize: "none"}}></textarea>
                            <input type = "submit" className = "btn" value = "Send message" disabled={state.submitting} />
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
                                onSubmit={handleSubmit}              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </main>
    )
}

export default Contact;