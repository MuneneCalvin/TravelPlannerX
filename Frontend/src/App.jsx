import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from './pages/Home/Home';
import Flights from './pages/Flights/Flights';
import Destinations from './pages/Destinations/Destinations';
import Hotels from './pages/Hotels/Hotels';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn';
import Login from './pages/Login/Login'
import Notfound from './pages/Notfound';
import { useContext } from 'react';
import { Context } from './context/userContext/Context';

function App() {
    const { user } = useContext(Context);

    return (
        <>
            <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/Flights" element={user ? <Flights /> : <Login />} />
                <Route path="/Destinations" element={user ? <Destinations /> : <Login /> }/>
                <Route path="/Hotels" element={user ? <Hotels /> : <Login />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/About" element={<About />} />
                <Route path='*' element={<Notfound />}/>
            </Routes>

            <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;