import brazil from '../assets/featured-reo-de-janeiro-brazil.jpg';
import australia from '../assets/featured-north-bondi-australia.jpg';
import germany from '../assets/featured-berlin-germany.jpg';
import thailand from '../assets/featured-khwaeng-wat-arun-thailand.jpg';
import italy from '../assets/featured-rome-italy.jpg';
import maldives from '../assets/featured-fuvahmulah-maldives.jpg';
import '../App.css'

function Home() {
    return (
        <main>
            <header className = "flex">
            <div className = "container">
                <div className = "header2-title">
                    <h1>Leave Your Footprints</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
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
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
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
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
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
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
                            </div>
                        </div>
                    </div>Name

                    <div className = "featured-item my-2 shadow">
                        <img src = {thailand} alt = "featured place" />
                        <div className = "featured-item-content">
                            <span>Name
                                <i className = "fas fa-map-marker-alt"></i>
                                Khwaeng wat arun, thailand
                            </span>
                            <div>
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
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
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
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
                                <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed dignissimos libero soluta illum, harum amet excepturi sit?</p>
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
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" className = "btn">Read more</a>
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-map-marked-alt"></i>
                        </span>
                        <h3>Trave Guide</h3>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" className = "btn">Read more</a>
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-money-bill"></i>
                        </span>
                        <h3>Suitable Price</h3>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        <a href = "#" className = "btn">Read more</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Video */}
        <section id = "video">
            <div className = "video-wrapper flex">
                <video loop>
                    <source src = "videos/video-section.mp4" type = "video/mp4" />
                </video>
                <button type = "button" id = "play-btn">
                    <i className = "fas fa-play"></i>
                </button>
            </div>
        </section>
        </main>
    );
}

export default Home