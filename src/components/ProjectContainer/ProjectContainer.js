import React from 'react';
import { Element } from 'react-scroll'; // ✅ THIS was missing
import Project from '../Project/Project';
import './ProjectContainer.css';

const ProjectContainer = () => {
  const projects = [
    {
      img: './calculator.png',
      title: 'Simple Calculator',
      description: 'It is a basic web-based calculator built using HTML, CSS and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication and division. Designed with a clean user interface and responsive layout for smooth usability.',
      link: 'https://github.com/praveenasiva05/Calculator-app.git',
    },
    {
      img: './Todo.png',
      title: 'To-Do List App',
      description: 'A simple and interactive To-Do List application developed using React. It allows users to add, edit, delete and mark tasks as complete. Built with a focus on clean UI and dynamic state management using React hooks.',
      link: 'https://github.com/praveenasiva05/Todo-app.git',
    },
    {
      img: './UI.png',
      title: 'Online Clothing Store UI',
      description: 'Designed a modern, responsive UI for an online clothing e-commerce platform using Figma. ',
      link: 'https://www.figma.com/design/NJlxHk33nIrm8z7myOHYAd/first-project?node-id=0-1&t=b3zAA6yFbrMhqj6z-1',
      
    },
  ];

  return (
    <Element name="Projects" className="projects-Container">
      <h1>Projects</h1>
      <p>Here are some of my mini projects which I have done recently to develop my skills</p>
      <div className="projects-Container__projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
};

export default ProjectContainer;
