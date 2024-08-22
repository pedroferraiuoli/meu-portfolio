import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className={`md:hidden fixed top-4 left-4 z-50 text-white p-2 focus:outline-none ${isOpen ? 'hidden' : ''}`}
      >
        <FaBars size={24} />
      </button>

      <button 
        onClick={toggleMenu} 
        className={`md:hidden fixed top-4 right-4 z-50 text-white p-2 focus:outline-none ${isOpen ? '' : 'hidden'}`}
      >
        <FaTimes size={24} />
      </button>

      <aside 
        className={`fixed top-0 left-0 h-screen bg-gray-800 border-r border-gray-700 text-white p-4 transition-transform  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64 md:top-0`}
      >
        <h1 className="text-2xl font-bold mb-6">Meu portfólio</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:underline flex border border-gray-600 p-2 rounded place-content-center">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline border border-gray-600 p-2 rounded place-content-center flex">Projetos</a>
            </li>
            <li>
              <a href="#about" className="hover:underline border border-gray-600 p-2 rounded place-content-center flex">Sobre Mim</a>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <h2 className="text-xl mb-4">Socials</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://github.com/pedroferraiuoli" target="_blank" className="flex items-center border border-gray-600 p-2 rounded">
                <FaGithub className="mr-2" /> Github
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/pedro-ferraiuoli-283568296" className="flex items-center border border-gray-600 p-2 rounded">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="/Currículo.pdf" download className="flex items-center border border-gray-600 p-2 rounded">
                <FaDownload className="mr-2" /> Currículo
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
