import React from 'react';
import {Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import './Aboutme.css';

const Aboutme = () => {
  return (
    <Element name="About" className="aboutme__page">
      <div className="aboutme__container">
        <div className="aboutme">
          <h1>About Me</h1>
          <p>
            I'm a second-year Information Technology student at the Institute of Technology, University of Moratuwa. My studies focus on software development, web technologies and IT systems to build a strong foundation for a career in tech. I'm passionate about web development and love turning creative ideas into functional, responsive websites. I enjoy working with modern technologies like React, HTML, CSS and JavaScript to build clean and user-friendly web experiences. I'm always learning and exploring new tools to improve my skills and stay up-to-date in the world of web development.
          </p>
          <h2>Programming Skills</h2>
          <div className="aboutme__skills">
            <h3>Python</h3>
            <div className="aboutme__slider aboutme__sliderPython">
              <LinearProgress variant="determinate" value={80} />
            </div>

            <h3>Java</h3>
            <div className="aboutme__slider aboutme__sliderJava">
              <LinearProgress variant="determinate" value={60} />
            </div>

            <h3>React</h3>
            <div className="aboutme__slider aboutme__sliderReact">
              <LinearProgress variant="determinate" value={50} />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Aboutme;
