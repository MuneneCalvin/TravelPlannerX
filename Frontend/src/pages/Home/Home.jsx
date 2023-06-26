import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import brazil from '../../assets/featured-reo-de-janeiro-brazil.jpg';
import australia from '../../assets/featured-north-bondi-australia.jpg';
import germany from '../../assets/featured-berlin-germany.jpg';
import thailand from '../../assets/featured-khwaeng-wat-arun-thailand.jpg';
import italy from '../../assets/featured-rome-italy.jpg';
import maldives from '../../assets/featured-fuvahmulah-maldives.jpg';
import video from '../../assets/video-section.mp4';
import './Home.css'

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 6000);
    
        return () => clearTimeout(timeout);
    }, []);

    return (
        <main>
        {isLoading ? (
        <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </div>
        ): (
            <>
                <header className = "flex">
            <div className = "container">
                <div className = "header-title">
                    <h1>Leave Your Footprints</h1>
                    <p>Let us be your trusted companion as you embark on your next adventure, creating memories that will last a lifetime. Welcome to our travel family.</p>
                </div>
                <div className = "header-form">
                    <h2>Choose your Travel location:</h2>
                    <form className = "flex">
                        <input type = "text" className = "form-control" placeholder="Destination name" />
                        <input type="date" className = "form-control" placeholder="Date" />
                        <input type="number" className = "form-control" placeholder="Price ($)" />
                        <input type="submit" className = "btn" value = "Search" />
                    </form>
                </div>
            </div>
        </header>
        
        {/* Featured */}
        <section id = "featured" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">know about some places before your travel</span>
                    <h2 className = "lg-title">featured places</h2>
                </div>

                <div className = "featured-row">
                    <div className = "featured-item my-2 shadow">
                        <img src = {brazil} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Reo De Janeiro, Brazil
                            </span>
                            <div>
                                <p className = "text">Also known as the Marvelous City, captivates visitors with its stunning landscapes, iconic landmarks like Christ the Redeemer, vibrant culture, and world-renowned Carnaval celebrations.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                    <img src = {australia} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                North Bondi, Australia
                            </span>
                            <div>
                                <p className = "text">Is a coastal paradise offering pristine sandy beaches, crystal-clear waters, a laid-back atmosphere, and a vibrant beach culture that entices visitors and locals alike.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = {germany} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>  
                                Berlin, Germany
                            </span>
                            <div>
                                <p className = "text">Is a dynamic and diverse metropolis, where a rich history merges with avant-garde art, bustling nightlife, and a thriving food scene, creating an unforgettable urban experience.</p>
                            </div>
                        </div>
                    </div>Name

                    <div className = "featured-item my-2 shadow">
                        <img src = {thailand} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Khwaeng wat arun, thailand
                            </span>
                            <div>
                                <p className = "text">It enchants visitors with its breathtaking Wat Arun temple, adorned with intricate architectural details and offering panoramic views of the Chao Phraya River, creating a truly mesmerizing spiritual and cultural experience</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = {italy} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Rome, Italy
                            </span>
                            <div>
                                <p className = "text">The eternal city, beckons with its timeless charm, ancient ruins like the Colosseum and Roman Forum, magnificent art and architecture, and delectable cuisine, making it a must-visit destination for history enthusiasts, art lovers, and food connoisseurs alike.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = {maldives} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                fuvahmulah, maldives
                            </span>
                            <div>
                                <p className = "text">A hidden gem in the Indian Ocean, mesmerizes visitors with its pristine white sandy beaches, vibrant coral reefs, and unique freshwater lakes, offering an idyllic tropical paradise for those seeking tranquility and natural beauty.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Service Section */}
        <section id = "services" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">know about services that we offer</span>
                    <h2 className = "lg-title">Our services</h2>
                </div>

                <div className = "services-row">
                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-hotel"></i>
                        </span>
                        <h3>Luxurious Hotel</h3>
                        <p className = "text">Our comprehensive range of hotel services aims to exceed your expectations, offering impeccable amenities, attentive staff, and a seamless blend of comfort and convenience to enhance your overall experience during your stay with </p>
                        <Link to='/About' className = "btn">Read more</Link>
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-map-marked-alt"></i>
                        </span>
                        <h3>Travel Guide</h3>
                        <p className = "text">Our expert travel guides are your trusted companions, providing in-depth knowledge, insider tips, and personalized recommendations to help you navigate and uncover the hidden gems of your destination, ensuring a truly enriching and unforgettable travel experience.</p>
                        <Link to='/About' className = "btn">Read more</Link>
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-money-bill"></i>
                        </span>
                        <h3>Suitable Price</h3>
                        <p className = "text">We strive to offer competitive and affordable prices for our services, ensuring that you can enjoy exceptional quality and value without compromising on your budget, making your travel experience accessible and rewarding</p>
                        <Link to='/About' className = "btn">Read more</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Video */}
        <section id = "video">
            <div className = "video-wrapper flex">
                <video loop>
                <source src ={video} type = "video/mp4"></source>
                </video>
                <button type = "button" id = "play-btn">
                    <i className = "fas fa-play"></i>
                </button>
            </div>
        </section>
            </>
        )}
        </main>
    );
}

export default Home