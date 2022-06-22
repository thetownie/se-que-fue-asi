import React from 'react'
import '../styles/About.scss';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

export default function About () {
  return(
    <div className="about-container"> 
      <Link to="home">  
      <div class="arrow"></div>
      </Link>
      <div className="artist-info">
        <Typewriter
          options={{
            delay:40
          }}
          onInit={(typewriter) => {
          typewriter.typeString(`xime izquierdo ugaz is a South American non-binary multimedia artist/writer, curator, language justice worker and educator. They're currently based in Lima and live with their cat Ocean. They are the visual arts co-curator at Nat. Brut, co-organizer of QTPOC festival based in Peru, Cabritas Resistiendo as well as BODYHACK a mutual aid global party by and for trans & nb folks. Their first chapbook is titled Estoy Tristeza (No, Dear Magazine & Small Anchor Press, 2018).`)

          .pauseFor(2500)
          .start();
          }}
        />
      </div>


      <h2 className="links">
        <div>
        <a href="https://www.instagram.com/huacatayy/"> + instagram </a>
        </div>

        <div>
        <a > + ximeizquierdougaz@gmail.com </a>
        </div> 

        <div>
        <a href="https://www.ximexime.com"> +  website </a>
        </div>
      </h2>
      
      <footer> <span className="copyright">©</span> 2021 All Rights Reserved | Justin Roberts </footer>
    </div>
  )
}
