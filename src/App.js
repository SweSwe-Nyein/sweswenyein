import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Greeting from './components/greeting/Greeting';
import Aboutme from './components/aboutme/Aboutme';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Greeting />
      <Aboutme />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
