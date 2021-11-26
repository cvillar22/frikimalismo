import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import CartWidget from "../CartWidget/CartWidget";
import NavBarCategories from "./NavBarCategories";

const NavBar = () =>{

    const [categories, setCategories] = useState(null);

	const getCategories = () =>{
		fetch("/categories.json")
		.then((res)=> res.json())
		.then((json) => {
			setCategories(json)
		});	
	}
  	useEffect(getCategories, []);


    return(
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/" >
             <a className="navbar-item has-text-white">
                <h1>
                    <strong>FRIKIMALISMO</strong>
                </h1>
            </a>
            </Link>
            
            
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">

                    {categories && <NavBarCategories categories={categories} />}

                    <div className="navbar-item">
                            
                            <a><CartWidget /></a>
                            
                     </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;