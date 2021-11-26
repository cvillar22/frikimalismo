import React from "react";
import ItemCountContainer from '../Counter/ItemCountContainer'


const ItemDetail = ({itemFiltered}) => {
  
 return (
    <article className="card has-text-centered m-5">
      <header className="card-header is-flex is-justify-content-center">
        <figure className="card-image">
        <img  className="image" src={itemFiltered.prodImg} alt="" />
        </figure> 
      </header>
       <section className="card-content">
        <h3 className="subtitle is-size-4-desktop">{itemFiltered.title}</h3>
        <b className="is-block is-size-4-desktop"> ${itemFiltered.price} </b>
        <b>{itemFiltered.descrip}</b>
        <small className="tag is-info is-light">stock: {itemFiltered.stock}</small>
      </section>
      <footer className="card-footer is-flex-direction-column is-align-items-center">
      <ItemCountContainer stock={itemFiltered.stock} initial={1} />
        <button className="button is-dark is-small p-2 m-4" type="button" title="description">Añadir al carro</button> 
      </footer>
    </article>
  );
}
export default ItemDetail;