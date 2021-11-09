import React from "react";
import 'bulma/css/bulma.min.css';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () =>{
    return(
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
             <a className="navbar-item">
                <h1>
                    <strong>FRIKIMALISMO</strong>
                </h1>
            </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item"><strong>DecoHogar</strong></a>
                    <a className="navbar-item"><strong>Accesorios</strong></a>
                    <a className="navbar-item"><strong>Indumentaria</strong></a>
                    <div className="navbar-item">
                            <a><CartWidget /></a>
                     </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;