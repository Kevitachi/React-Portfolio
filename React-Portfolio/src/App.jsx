import './App.css'
import { useEffect } from 'react'
import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Homepage from './components/Homepage/Homepage'
import TechStack from './components/TechStack/TechStack'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Scroll_to_Top from './components/Scroll_to_Top/Scroll_to_Top'


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='app'>
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Experience/>
      <Projects/>
      <Scroll_to_Top/>
    </div>
  )
}

export default App
