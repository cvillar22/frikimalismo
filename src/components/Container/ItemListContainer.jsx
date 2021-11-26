import {useEffect, useState} from "react";
import 'bulma/css/bulma.min.css';
import Load from "../../helpers/load";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";




const ItemListContainer = () =>{

    const { id } = useParams();

  const [data, setData] = useState({
    items: [],
    isLoading: true,
  });

  const requestData = () => {
    setTimeout(function startFetch() {
      fetch("/products.json")
        .then((response) => response.json())
        .then((json) => {
          const products = id
        ? json.filter((product) => product.category === +id)
        : json;
          setData({ items: json, isLoading: false })
        });
    }, 2000);
  };
  

  useEffect(() => {
    requestData()
  }, [id])

    return(
        <div>
            {data.isLoading ?  <Load /> : <ItemList items={data.items} />}
        </div>
    );
}
export default ItemListContainer;