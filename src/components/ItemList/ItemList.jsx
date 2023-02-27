import React from 'react';
import Item from "../Item/Item"

const Itemlist = ({products}) => {
    return (
        <>
          {products.map (producto => <Item item={producto} key={producto.id}/> )}  
        </>
    );
}

export default Itemlist;
