import React from "react";
import 'bulma/css/bulma.min.css';
import ConoImg from '../../assets/cono.svg';


const ItemListContainer = (props) =>{

    const{greetings}=props;
    return(
        <div>
            <div className="avisoInicio p-5">
                <h1>{greetings}</h1>
            </div>

            <div>
                <img title="Cono" className="conoImg" src={ConoImg} alt= "Cono"/>
            </div>
        </div>
    );
}
export default ItemListContainer;