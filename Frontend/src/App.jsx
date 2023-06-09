import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home';
import Flights from './pages/Flights';
import Cruises from './pages/Cruises';
import Hotels from './pages/Hotels';
import Contact from './pages/Contact';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Notfound from './pages/Notfound';

function App() {

    return (
        <>
            <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Flights" element={<Flights />} />
                <Route path="/Cruises" element={<Cruises />} />
                <Route path="/Hotels" element={<Hotels />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/About" element={<About />} />
                <Route path='*' element={<Notfound />}/>
            </Routes>

            <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;