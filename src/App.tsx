import { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Catalog from './components/pages/Catalog';
import NewsletterForm from './components/pages/NewsletterForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Validation from './components/pages/Validation';

const App: FC = () => {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>About</Route>
        <Route path="/projects" element={<Projects />}>Projects</Route>
        <Route path="/contact" element={<Contact />}>Contact</Route>
        <Route path="/catalog" element={<Catalog />}>Catalog</Route>
        <Route path="/newsletter-form" element={<NewsletterForm />}>NewsletterForm</Route>
        <Route path="/newsletter-form/validation" element={<Validation />}>NewsletterForm-Validation</Route>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
