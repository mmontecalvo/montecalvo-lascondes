import React from 'react';
import Item from './Item';


function ItemList({products}) {
    return (
        <article className="itemList">
            {
                products.map((product) =>
                    <Item key={product.id} product={product} />
                )
            }
        </article>
    )
}

export default ItemList
