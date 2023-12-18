import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialIcons from './components/SocialIcons';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Education from './components/Education';




function App() {
  return (
    <>
    <NavBar/>
    <Home />
    <Education/>
    <Projects/>
    <Skills/>
    <ContactForm/>
    <Footer/>


    <SocialIcons/>
    </>
  );
}

export default App;
