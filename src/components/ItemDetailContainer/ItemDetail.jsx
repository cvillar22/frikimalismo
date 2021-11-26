import React from "react";
import { Link } from "react-router-dom";
import ItemCountContainer from '../Counter/ItemCountContainer'


const ItemDetail = ({itemFiltered}) => {
  
 return (
    <div className="columns is-mobile is-centered">
      <div class="column is-half m-5">
      <h1 className="subtitle is-size-3-desktop m-4">{itemFiltered.title}</h1> 
      <figure className="card-image is-flex is-justify-content-center ">
        <img  className="image m-3" src={itemFiltered.prodImg} alt="" />
        </figure>
       <section className="card-content m-0">
        <b className="is-block is-size-4-desktop"> ${itemFiltered.price} </b>
        <b>{itemFiltered.descrip}</b>
        <div>
        <small className="tag is-info is-light">stock: {itemFiltered.stock}</small>
        </div>
      </section>
      <footer className="card-footer is-flex-direction-column">
      <ItemCountContainer stock={itemFiltered.stock} initial={1} />
        <Link to='/cart'><button className="button is-dark is-small p-2 m-4" type="button" title="description">Añadir al carro</button></Link> 
      </footer>
      </div>
    </div>
  );
}
export default ItemDetail;