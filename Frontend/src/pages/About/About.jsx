import './About.css'
import '../Home/Home.css'
import AboutImg from '../../assets/about-img.jpg'

function About() {
    return (
        <main>
            <header id='about-page' className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>About</h1>
                    <p>Our travel company is a passionate and innovative venture dedicated to redefining the way people experience the world. We believe that travel has the power to broaden horizons, foster cultural understanding, and create lifelong memories. </p>
                </div>
            </div>
        </header>

        <section id = "about" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">things to know about us</span>
                    <h2 className = "lg-title">our story</h2>
                </div>

                <div className = "about-row">
                    <div className = "about-left my-2">
                        <img src = {AboutImg} alt = "about img" />
                    </div>
                    <div className = "about-right">
                        <h2>15 Years of Experience</h2>
                        <p className = "text">TravelXplorer is owned by Xe7en Ltd, a leading branch in web design and e-commerce solutions. It is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raise our spirit to reach ahead from our clients expectation.</p>
                        <p className = "text">Our mission is to touch the horizon where our capabilities may successfully meet with the requirements og our clients, that too with ultimate transparency and cost-effectiveness.</p>
                        <p className='text'>Our vision is sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients. </p>
                    </div>
                </div>
            </div>
        </section>

        <section id = "facts" className = "py-4 flex">
            <div className = "container">
                <div className = 'title-wrap'>
                    <span className = "sm-title">know some facts about our agency</span>
                    <h2 className = "lg-title">fun facts</h2>
                </div>

                <div className = "facts-row">
                    <div className = "facts-item">
                        <span className = "fas fa-camera-retro facts-icon"></span>
                        <div className = "facts-info">
                            <strong>1220</strong>
                            <p className = "text">photos taken</p>
                        </div>
                    </div>

                    <div className = "facts-item">
                        <span className = "fas fa-umbrella-beach  facts-icon"></span>
                        <div className = "facts-info">
                            <strong>450</strong>
                            <p className = "text">beaches visited</p>
                        </div>
                    </div>

                    <div className = "facts-item">
                        <span className = "fas fa-mountain facts-icon"></span>
                        <div className = "facts-info">
                            <strong>84</strong>
                            <p className = "text">mountains climbed</p>
                        </div>
                    </div>

                    <div className = "facts-item">
                        <span className = "fas fa-ship facts-icon"></span>
                        <div className = "facts-info">
                            <strong>120</strong>
                            <p className = "text">cruises organized</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </main>
    )
}

export default About