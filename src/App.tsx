import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';
import { About } from './pages/About';
import Courses from './pages/Courses';
import { Features } from './pages/Features';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
