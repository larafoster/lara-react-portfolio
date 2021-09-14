import React from "react"
import { Switch, Route } from "react-router-dom"
// home page
import Home from "../components/pages/Home.js";
// portfolio sections
import About from "../components/pages/About.js";
import Skills from "../components/pages/Skills.js";
import Experience from "../components/pages/Experience.js";
import Education from "../components/pages/Education.js";
import Portfolio from "../components/pages/Portfolio.js";
import Contact from "../components/pages/Contact.js";
//pages
import Pdf1 from "../components/pages/Pdf1.js";
import NoMatch from "../components/pages/Error404";

const AppRouter = () => {

    return (

        <Switch>

        <Route exact path="/" component={Home} /> 
        <Route  path="/about" component={About} /> 
        <Route  path="/skills"component={Skills} /> 
        <Route  path="/experience" component={Experience} /> 
        <Route  path="/education" component={Education} /> 
        <Route  path="/portfolio" component={Portfolio} /> 
        <Route  path="/contact" component={Contact} /> 
        <Route  path="/resume" component={Pdf1} /> 
        <Route component={NoMatch} />

        </Switch>

    )

}
export default AppRouter;