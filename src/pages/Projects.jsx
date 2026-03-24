import React from 'react';


const Projects = () => {
const myProjects = [
  {
    id: 1,
    title: "E-Commerce App",
    image: "ecommerce.jpg",
    description: "Une application web performante avec React.",
    tech: ["React", "CSS3"]
  },
  {
    id: 2,
    title: "Portfolio Pro",
    image: "Portfolio.jpg",
    description: "Design moderne avec effet de flou.",
    tech: ["JavaScript", "HTML5"]
  }
];

  
  return (
    <div className="projects-section">
      <h2 className="section-title">02. Mes Projets</h2>
      
      <div className="projects-grid">
        {myProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src = {project.image} alt = {project.title} className="project-img"/>
            <div className="project-image-placeholder" style={{backgroundColor: project.color}}>
               
               <span>Aperçu</span>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Projects;