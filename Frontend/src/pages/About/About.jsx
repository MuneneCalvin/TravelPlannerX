import './About.css'
import '../Home/Home.css'
import AboutImg from '../../assets/about-img.jpg'

function About() {
    return (
        <main>
            <header className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
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
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sed aperiam qui repudiandae earum voluptatem. Modi at inventore omnis veniam necessitatibus exercitationem vel nesciunt delectus ex officiis, culpa doloremque odit illo saepe placeat. Delectus consequuntur reprehenderit omnis accusantium officiis!</p>
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo blanditiis quidem consequuntur qui quaerat fuga iste tenetur consequatur porro. Aliquam maiores alias doloribus at quisquam quo numquam perferendis. Odit!</p>
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