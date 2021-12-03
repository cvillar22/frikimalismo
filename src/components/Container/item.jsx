import React from "react";
import { Link } from "react-router-dom";


const Item = ({prodImg, title, price, stock,id})=>{
  

  return (
    <div className="card">

      <div className="card-image">
        <figure className="image is-150x150">
          <img className="image" src={prodImg} alt={title} />
        </figure>
      </div>

      <div className="card-content">
        <h2 className="subtitle">{title}</h2>
        <b className="is-block"> ${price} </b>
        <small className="tag is-info is-light">stock: {stock}</small>
      </div>
      
      <footer className="card-content is-direction-column is-align-items-center"> 
         <Link to={`/product/${id}`}><button className="button is-dark p-2 m-2" type="button" title="detail">
        DESCRIPCIÓN
         </button>
         </Link>
      </footer>
        
    </div>
  );
};

export default Item;