import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Media from './pages/Media';
import About from './pages/About';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import News from './pages/News';
import Events from './pages/Events';


const Content = () => {
  const location = useLocation(); // Get the current location


  return (
    <>

      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Section */}
        <Route path="/about" element={<About />} />

        {/* Research & Innovation */}
        <Route path="/research" element={<Research />} />
        <Route path="/researchandinnovation" element={<Research />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Media */}
        <Route path="/media" element={<Media />} />

        {/* News & Events */}
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
      <Footer />








    </>
  );
};

const App = () => {
  return (
    <Router>
      <Content />
    </Router>
  );
};

export default App;










