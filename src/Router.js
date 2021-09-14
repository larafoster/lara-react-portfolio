import React from 'react';
import {Switch, Route} from 'react-router-dom';
// home page
// portfolio sections
import About from './components/pages/About.js';
import Skills from './components/pages/Skills.js';
import Experience from './components/pages/Experience.js';
import Education from './components/pages/Education.js';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact.js';
//pages
import Pdf1 from './components/pages/Pdf1.js';
import NoMatch from './components/pages/Error404';

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/"><About /> </Route>
      <Route path="/skills"><Skills /> </Route>
      <Route path="/experience"><Experience /> </Route>
      <Route path="/education"><Education /> </Route>
      <Route path="/portfolio"><Portfolio /> </Route>
      <Route path="/contact"><Contact /> </Route>
      <Route path="/resume"><Pdf1 /> </Route>
      <Route><NoMatch /></Route> 
    </Switch>
  );
};

export default AppRouter;
