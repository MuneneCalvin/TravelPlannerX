import Navbar from '../../components/Navbar/Header';
import './About.css'

function About() {
    return (
        <main>
            <Navbar />

            <header className = "flex header-sm">
            <div className = "container">
                <div className = "header-title">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum maxime enim odit illum in molestias beatae doloremque, ratione optio.</p>
                </div>
            </div>
        </header>

        </main>
    )
}

export default About