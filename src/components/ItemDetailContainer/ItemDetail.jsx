import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCountContainer from '../Counter/ItemCountContainer';
import { useCartContextProvider } from "../../context/cartContext";


const ItemDetail = ({itemFiltered}) => {

  const [count, setCount] = useState(1);

  const updateCount = (event)=> setCount(count + +event.target.value);

  const [finished, setFinished] = useState(false);

  const handleState = () =>setFinished(!finished);

  const {addItem} = useCartContextProvider();

  const handleSend = () => {
    const newItemFiltered = { ...itemFiltered , quantity: count };
    addItem(newItemFiltered);
  };
 
  
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
      
      {!finished ? ( 

      <>
      
      <ItemCountContainer stock={itemFiltered.stock} initial={1} count={count} onAdd={updateCount} />
        <button  onClick ={()=>{handleState(); handleSend(itemFiltered);}} className="button is-dark is-normal p-2 m-4" type="button">
          Comprar
        </button> 

      </>

      ):(
      <>

        <Link to ="/cart" onClick={handleState}>
          <button onClick = {handleState} className= "button is-dark is-normal is-hovered m-4">
            Listo!
          </button>
        </Link>
       
        <button onClick = {()=> {handleState();}} className= "button is-danger is-small m-1">
        Cambiar
        </button>

      </>

      )}
        </footer>
      </div>
    </div>
  );
}
export default ItemDetail;