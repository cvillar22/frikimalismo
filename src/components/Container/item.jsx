import React from "react";

const Item = ({ title, price, prodImg, stock,  descrip }) => {
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

      <div>
        <small className="tag">{descrip}</small>
      </div>
      
      <footer className="card-content">
         <button className="button is-dark" type="button" title="Add to cart">
          comprar
         </button>
      </footer>
        
    </div>
  );
};

export default Item;