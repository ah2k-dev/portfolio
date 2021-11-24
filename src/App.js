import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Preloader from './Components/Preloader';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
function App() {
  const [load, setload] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [])
  return (
    <div>
        <Preloader load={load} />
      <div className={load ? "no-App" : "App"}>
        <NavBar />
        <Home />
        <About />
        <Education />
        <Skillset />
        <Projects />
      </div>
    </div>
  );
}

export default App;
