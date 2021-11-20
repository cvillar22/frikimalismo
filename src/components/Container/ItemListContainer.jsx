import {useEffect, useState} from "react";
import 'bulma/css/bulma.min.css';
import Load from "../../helpers/load";
import ItemList from "./itemList";




const ItemListContainer = () =>{

    const[data,setData]= useState({
        items: [],
        isLoading: true,
    });

    const requestData = () =>{

    setTimeout(function startFetch(){
        fetch("products.json")
        .then((response)=> response.json())
        .then((json)=> setData({items: json, isLoading: false}));
    },2000);

};

useEffect(requestData, []);

    return(
        <div>
            {data.isLoading ?  <Load /> : <ItemList items={data.items} />}
        </div>
    );
}
export default ItemListContainer;