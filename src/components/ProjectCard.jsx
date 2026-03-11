import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="project-link">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;