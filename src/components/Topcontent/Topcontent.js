import React from 'react';
import { Link } from 'react-scroll';

import './Topcontent.css';

const Topcontent = () => {
  return (
    <div className='Topcontent'>
      <div className='profile__container'>
        <img
          src="./profile.jpg"
          alt="Profile"
          className='profile__image'
        />
      </div>
      <div className='Topcontent__container'>
        <h2>Ms.Praveena Sivananthan</h2>
        <p>Welcome to my portfolio website. Currently I'm an Undergraduate Student at ITUM</p>
      </div>
      <Link to="Projects" smooth={true} duration={500} offset={-70}>
        <button className='Topcontent__projectsButton'>My Projects</button>
      </Link>
    </div>
  );
};

export default Topcontent;
