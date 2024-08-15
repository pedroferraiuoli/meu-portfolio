import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './index.css';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-blue-500 p-4 text-white">
          <ul className="flex space-x-4">
            <li><ThemeSwitcher /></li>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/projects" className="hover:underline">Projetos</Link></li>
            <li><Link to="/about" className="hover:underline">Sobre Mim</Link></li>
            <li><Link to="/contact" className="hover:underline">Contato</Link></li>
          </ul>
        </nav>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
