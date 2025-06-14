import React from 'react';
import { Element } from 'react-scroll'; // Import Link for smooth scrolling
import Topcontent from '../Topcontent/Topcontent';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Element name="about" className="home">
        <Topcontent />
      </Element>
    </div>
  );
};

export default Home;
