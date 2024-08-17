import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-50 bg-gray-800 text-white p-4 border-r border-gray-700">
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
            <a href="#about" className="hover:underline border border-gray-600 p-2 rounded place-content-center flex" >Sobre Mim</a>
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
  );
};

export default Sidebar;
