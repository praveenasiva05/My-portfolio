import React from 'react';
import './Project.css';

const Project = ({ img, title, description, link }) => {
  return (
    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
      <div className="project">
        <img src={img} alt="Project Thumbnail" className="project__image" />
        <div className="project__info">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="project__buttons">
            <button>View</button>
            
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
