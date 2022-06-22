import React from 'react';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";


// pages 
import LandingPage from './components/LandingPage';
import Home from './components/Home'; // update to home component
import About from './components/About'; 
import Photo from './components/Photo';


function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return(
    <div className="App">
      <Switch  location={background || location}>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/img/:id" children={<Photo />} />

        <Route path="/">
          <LandingPage 

          />
        </Route>
        <Route>{'404'}</Route>
      </Switch>
      {background && <Route path="/img/:id" children={<Photo />} />}
    </div>
  )
};

export default App;