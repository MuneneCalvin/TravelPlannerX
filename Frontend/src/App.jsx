import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home';
import Sport from './pages/Sport';
import Business from './pages/Business';
import Technology from './pages/Technology';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {

    return (
        <>
            <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sport" element={<Sport />} />
                <Route path="/Business" element={<Business />} />
                <Route path="/Technology" element={<Technology />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path='*' element={<Notfound />}/>
            </Routes>

            <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;