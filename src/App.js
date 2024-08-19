import React from 'react';
import Sidebar from './components/Sidebar';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import { experiences } from './data/experience';
import { projects } from './data/project';
import { courses } from './data/curso';
import './index.css';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-800 text-white p-10">
        <section id="home" className="mb-20 flex">
          <div id="introducao">
          <h1 className="text-4xl font-bold mb-4">Pedro Ferraiuoli</h1>
          <p className="text-lg">Sou estudante de sistemas e desenvolvedor! Conheça um pouco do meu trabalho.</p>
          </div>
          <img src="/numerados.png" alt="Web Developer" class="object-cover w-[128px] h-[128px] rounded-lg">
          FOTO AQUI
        </section>
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
          <p className="">Sou estudante de Sistemas de Informação, atualmente no quinto período, com uma sólida base em várias áreas da tecnologia e desenvolvimento de software. Meu percurso acadêmico inclui cursos em Java e MySQL, que fortaleceram minha compreensão dos fundamentos da programação e gestão de banco de dados.

Atualmente, trabalho na prefeitura da minha cidade como analista e gestor de dados e desenvolvedor. Nesse papel, sou responsável por analisar e gerenciar dados, garantindo a integridade e a acessibilidade das informações para suportar a tomada de decisões. Além disso, desenvolvo soluções de software utilizando Python e Django, o que me permite criar aplicações web robustas e eficientes.

Tenho experiência com Power BI, que utilizo para criar relatórios e dashboards interativos que ajudam na visualização e análise de dados. Minha combinação de habilidades em análise de dados, desenvolvimento web e visualização de informações me permite contribuir significativamente para projetos e iniciativas que visam melhorar a eficiência e a tomada de decisões baseada em dados.

Estou sempre buscando aprender e me adaptar às novas tecnologias e metodologias para aprimorar minhas habilidades e entregar soluções inovadoras e eficazes.</p>
        </section>
        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Experiências Recentes</h2>
          <div className="grid grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="course" className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Cursos realizados</h2>
          <div className="grid grid-cols-2 gap-6">
            {courses.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projetos</h2>
          <div className="grid grid-cols-2 gap-6">
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
