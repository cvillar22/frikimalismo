import React from "react";
import Item from "./item";


const ItemList = ({ items }) => {

    const generateItem = item => {
        return (
            <div key={item.id} className="column is-narrow is-one-third p-6">
                <Item {...item} />
            </div>
        )
    };

    return (
        <div className="columns is-multiline is-centered p-4 m-3">
            {items.map(generateItem)}
        </div>
    );
};

export default ItemList;