import React from "react";

import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/main.css"; 
import "./assets/css/responsive.css";

import Header from "./components/includes/Header.js";
import NavTop from "./components/includes/Nav.js";
import Footer from "./components/includes/Footer.js";


import AppRouter from "./Router.js"
const App = () => {
 
    return (
        <>
<Header />
<NavTop />
            
            <div>
                <AppRouter />
            </div>
            

<Footer />

        </>
    )
}

export default App;