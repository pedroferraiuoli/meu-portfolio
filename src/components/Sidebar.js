import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 text-white">
      <FaBars size={24} /> 
      </button>
       )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 border-r border-gray-700 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-4 text-white"
        >
          <AiOutlineClose size={24} />
        </button>
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
      </div>
      

  );
};

export default Sidebar;
