// src/data/projects.js
export const projects = [
    {
      title: 'Minhaescola',
      description: 'Sistema de pré-matrícula escolar com geolocalização, usado na rede pública de Campos dos Goytacazes. ',
      tags: ['Python', 'Django', 'HTML/CSS/JS'],
      imageUrl: 'minhaescola.png',
      githubUrl: '',
      detailedDescription: `
<strong>Resumo:</strong><br/>
O "Minhaescola" é um sistema desenvolvido em Django para gerenciar a pré-matrícula de alunos na rede municipal de ensino de Campos dos Goytacazes (RJ). O sistema oferece aos responsáveis a possibilidade de escolher escolas próximas com base na geolocalização, facilitando o acesso à educação pública.<br/><br/>

<strong>Principais funcionalidades:</strong>
<ul class="list-disc pl-5">
  <li>Cadastro de alunos com verificação de dados</li>
  <li>Escolha de escolas por proximidade (baseada em coordenadas geográficas)</li>
  <li>Interface administrativa para triagem, acompanhamento e emissão de relatórios</li>
  <li>Controle de vagas nas unidades e diferentes niveis de acesso</li>
</ul>
<br/>

<strong>Tecnologias utilizadas:</strong><br/>
Django, Python, MariaDB, OpenStreetMap, GoogleAPI, HTML/CSS, JavaScript.<br/><br/>

<strong>Impacto:</strong><br/>
O sistema foi utilizado por milhares de responsáveis durante o período de matrícula e ajudou a otimizar a distribuição de vagas escolares, reduzindo filas presenciais e processos manuais, além de melhorar a distância média entre os alunos e suas unidades.
`
    },
    {
      title: 'Sistema de Gestão de Lotações',
      description: 'Ferramenta interna para gestão de professores e carências escolares da rede municipal, usado na Secretaria de Educação de Campos dos Goytacazes. ',
      tags: ['Python', 'Django', 'HTML/CSS/JS'],
      imageUrl: 'sgl.png',
      githubUrl: '',
      detailedDescription: `
<strong>Resumo:</strong><br/>
Sistema interno da Secretaria de Educação de Campos dos Goytacazes para gerenciar a lotação de professores e controlar carências de profissionais nas escolas da rede municipal. A solução visa centralizar as informações em um painel único e facilitar o trabalho do pedagógico e RH.<br/><br/>

<strong>Principais funcionalidades:</strong>
<ul class="list-disc pl-5">
  <li>Cadastro e acompanhamento de contratos e cargos de professores</li>
  <li>Controle de lotações por unidade escolar</li>
  <li>Registro de turmas e códigos de vagas por escola</li>
  <li>Relatórios em tempo real para apoio à tomada de decisões administrativas</li>
</ul>
<br/>

<strong>Tecnologias utilizadas:</strong><br/>
Django, Python, PostgreSQL, HTML/CSS, JavaScript básico, Bootstrap.<br/><br/>

<strong>Impacto:</strong><br/>
A ferramenta trouxe eficiência à alocação de professores e permitiu um mapeamento claro das necessidades da rede, reduzindo falhas de comunicação e erros manuais na gestão de pessoal.
`
    },
    {
      title: 'Calendário',
      description: 'Sistema CRUD para gerenciar eventos. ',
      tags: ['Python', 'Django', 'HTML/CSS/JS'],
      imageUrl: 'Calendario.png',
      githubUrl: 'https://github.com/pedroferraiuoli/sistemaCalendario',
    },
    {
      title: 'Numerador de PDF',
      description: 'Projeto criado em django para numerar páginas de um PDF.',
      tags: ['Python', 'Django', 'HTML/CSS/JS'],
      imageUrl: 'Numerados.png',
      githubUrl: 'https://github.com/pedroferraiuoli/numerarPdf',
    },
  ];
