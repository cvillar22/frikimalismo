import React from "react";
import 'bulma/css/bulma.min.css';
import ConoImg from '../../assets/cono.svg';


const ItemListContainer = () =>{
    return(
        <div>
            <div className="avisoInicio p-5">
                <h1>SITIO EN CONSTRUCCIÓN</h1>
            </div>

            <div>
                <img title="Cono" className="conoImg" src={ConoImg} alt= "Cono"/>
            </div>
        </div>
    );
}
export default ItemListContainer;