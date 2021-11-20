import React from "react";
import Item from "./item";


const ItemList = ({ items }) => {

    const generateItem = item => {
        return (
            <div key={item.id} className="column is-justify-content-center p-1 m-6">
                <Item {...item} />
            </div>
        )
    };

    return (
        <div className="columns is-multiline is-flex">
            {items.map(generateItem)}
        </div>
    );
};

export default ItemList;