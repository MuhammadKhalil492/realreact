import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from "./About";
import Home from "./Home";
import {Switch,Route} from 'react-router-dom'
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
const App =()=>{
    return(
        <>
        <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/service' component={Service}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/about' component={About}/>
                {/* <Home/>
                <About/> */}
            </Switch>
        </>
    )
};
export default App;