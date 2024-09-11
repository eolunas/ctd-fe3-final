import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Context } from "./Context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from './Routes/Favs';

function App() {
  return (
    <Context>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer/>
      </Router>
    </Context>
  );
}

export default App;
