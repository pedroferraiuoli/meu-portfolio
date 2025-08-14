import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = "Pedro Ferraiuoli | Portfólio";
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:ml-64">
      <Sidebar />
      <div className="flex-1 bg-space text-white p-4 md:p-10">
        <section id="home" className=" flex md:p-0 p-4 md:flex-row gap-6 md:gap-20 items-center justify-center mt-8 md:mt-0">
          <img src="/perfil.jpg" className="w-24 md:w-48 rounded self-start"></img>

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
          <p className="text-sm md:text-base text-gray-300">Sou estudante de Sistemas de Informação, atualmente no sétimo período no Instituto Federal Fluminense, e sempre busquei aplicar meus conhecimentos de forma prática, participando de projetos com impacto real. Tenho experiência no desenvolvimento de sistemas web com Python e Django, além de conhecimento em Java, MySQL e outras tecnologias que fui aprendendo ao longo da graduação e das experiências profissionais.

Atuo na Prefeitura de Campos dos Goytacazes, onde desenvolvi e mantenho sistemas internos voltados à área da Educação, como um sistema de gestão de lotações. Também já atuei no setor de Controle Interno, desenvolvendo ferramentas para automatizar processos administrativos.

Além das experiências institucionais, também participei de projetos de forma autônoma, como o sistema Minhaescola, usado no processo de pré-matrícula da rede municipal, que ajudei a construir desde o início.

Tenho afinidade com desenvolvimento web e por criar soluções que de fato ajudem as pessoas no dia a dia. Gosto de trabalhar com propósito, aprender coisas novas e me envolver em projetos que desafiem minhas habilidades e me façam crescer como desenvolvedor.</p>
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
