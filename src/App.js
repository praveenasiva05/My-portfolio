import React from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Aboutme from './components/Aboutme/Aboutme'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import Contact from './components/Contact/Contact'
import './App.css' // Import your main CSS file

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Aboutme />
      <ProjectContainer />
      <Contact />
    </div>
  )
}

export default App

