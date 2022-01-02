import { FC, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Catalog from './components/pages/Catalog';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <Router>
      <header>
        <Navbar />  
      </header>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/projects" element={<Projects />}>Projects</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/catalog" element={<Catalog />}>Contact</Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
