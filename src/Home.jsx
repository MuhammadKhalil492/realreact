import React from "react";
import sa from '../src/sa.png';
import{NavLink} from 'react-router-dom';
import Common from "./Common";
const Home=()=>{
    return(
        <>
            <Common 
        name="Home" 
        imgsrc={sa}
        visit="/service"
        btnvalue="Service"
        />
            {/* <section id="header" className="d-flex align-items-center ">
                <div className="container-fluid nav-bg">
                    <div className="row ">
                        <div className="col-10 mx-auto ">
                            <div className="row d-flex justify-content-center flex-col">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1>hi aim pakistani</h1>
                                    <h2 className="my-3">hi yourraer great</h2>
                                    <div className="mt-3">
                                        <NavLink  className="btn-get-started" to="/service">get started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={sa} className="img-fluid" alt="safas"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
};
export default Home;