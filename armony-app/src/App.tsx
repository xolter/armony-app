import { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Catalog from './components/pages/Catalog';

const App: FC = () => {
  return (
      <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/projects" element={<Projects />}>Projects</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/catalog" element={<Catalog />}>Contact</Route>
    </Routes>
    </Router>
  );
}

export default App;
