import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cruise from './Pages/Cruise';
import Flight from './Pages/Flight';
import Hotel from './Pages/Hotel';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* header */}
        <Navbar />
        <Routes>
          {/* pages */}
          {/* homepage page */}
          <Route path='/' element={<Home />} />
          {/* Cruise page */}
          <Route path="/blogs" element={<Cruise />} />
          {/* about page */}
          <Route path="about" element={<About />} />
          {/* Flight page */}
          <Route path="flight" element={<Flight />} />
          {/* Hotel page */}
          <Route path="hotel" element={<Hotel />} />
          {/* NotFound page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* footer */}
        <Footer />

      </BrowserRouter>

    </>
  )
}

export default App