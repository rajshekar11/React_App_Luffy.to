import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Trending from './components/Trending';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/trending" element={<Trending />} />
           <Route path="/about" element={<About />} />
      </Routes>
    
    </Router>
  );
}

export default App;
