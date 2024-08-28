import React from 'react';
import Sidebar from './components/Sidebar';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import { experiences } from './data/experience';
import { projects } from './data/project';
import { courses } from './data/curso';
import './index.css';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineWorkOutline } from "react-icons/md";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row md:ml-64">
      <Sidebar />
      <div className="flex-1 bg-space text-white p-4 md:p-10">
        <section id="home" className=" flex md:p-0 p-4 md:flex-row gap-6 md:gap-20 items-center justify-center mt-8 md:mt-0">
          <img src="/perfil.jpg" className="w-24 md:w-36 rounded self-start"></img>

          <div id="introducao" className=''>
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Pedro Ferraiuoli</h1>
            <p className="text-sm md:text-lg text-gray-300">Sou estudante de sistemas e desenvolvedor! Conheça um pouco do meu trabalho.</p>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                Python <div><MdOutlineWorkOutline /></div>
              </span>
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                Django <div><MdOutlineWorkOutline /></div>
              </span>
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                HTML/CSS <div><MdOutlineWorkOutline /></div>
              </span>
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                Power BI <div><MdOutlineWorkOutline /></div>
              </span>
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                Java <div><HiOutlineAcademicCap /></div>
              </span>
              <span className="bg-gray-600 text-xs md:text-sm px-2 py-1 rounded flex items-center gap-1">
                MySql <div><HiOutlineAcademicCap /></div>
              </span>
            </div>
          </div>
        </section>

        <section id="about" className="mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Mim</h2>
          <p className="text-sm md:text-base text-gray-300">Sou estudante de Sistemas de Informação, atualmente no quinto período, com uma sólida base em várias áreas da tecnologia e desenvolvimento de software. Meu percurso acadêmico inclui cursos em Java e MySQL, que fortaleceram minha compreensão dos fundamentos da programação e gestão de banco de dados.

Atualmente, trabalho na prefeitura da minha cidade como analista e gestor de dados e desenvolvedor. Nesse papel, sou responsável por analisar e gerenciar dados, garantindo a integridade e a acessibilidade das informações para suportar a tomada de decisões. Além disso, desenvolvo soluções de software utilizando Python e Django, o que me permite criar aplicações web robustas e eficientes.

Tenho experiência com Power BI, que utilizo para criar relatórios e dashboards interativos que ajudam na visualização e análise de dados. Minha combinação de habilidades em análise de dados, desenvolvimento web e visualização de informações me permite contribuir significativamente para projetos e iniciativas que visam melhorar a eficiência e a tomada de decisões baseada em dados.

Estou sempre buscando aprender e me adaptar às novas tecnologias e metodologias para aprimorar minhas habilidades e entregar soluções inovadoras e eficazes.</p>
        </section>

        <section id="experience" className="mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Experiências Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>

        <section id="course" className="mb-10 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Cursos realizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {courses.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
