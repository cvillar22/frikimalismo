import React, {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props)=>{

	const {id} = useParams ();

	const [product, setProduct] = useState();

	const getDetailProd = () =>{
		fetch("/products.json")
		.then((res)=> res.json())
		.then((json)=> {
			const productFiltered = json.find( prod => prod.id.toString() === id);
			setProduct(productFiltered)
		});	
	}

useEffect(getDetailProd,[id])

return(
	<div className ="container">
		{ product && <ItemDetail itemFiltered={product} />}
	</div>
)
}
export default ItemDetailContainer;