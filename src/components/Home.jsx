import React, {useState, useEffect} from 'react';
import '../styles/Home.scss';
import Gallery from './Gallery';
import {Link} from 'react-router-dom';

export default function Home() {
  const [projectTitle, setProjectTitle] = useState("se que fue así porque estuve allí");

  useEffect(() => {
    console.log("gelkoo")
    const interval = setInterval(() => {
      if(projectTitle === "se que fue así porque estuve allí"){
        setProjectTitle("xime izquierdo ugaz")
      }else if(projectTitle === "xime izquierdo ugaz"){
        setProjectTitle("se que fue así porque estuve allí")
      }
    }, 2500);
    return () => clearInterval(interval)
  });

  return (
    <div>
      <header className="gallery-container"> 
        <div className="project-title">  
          <h3> {projectTitle} </h3 >
        </div>
        <div className="nav-container">
        <Link  to="/about">
          <h3 className="hover hover-1 about-header" >
          about
          </h3>
        </Link>
        </div>
      </header>
      
      <Gallery />
    </div>
    )
};