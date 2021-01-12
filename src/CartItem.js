import React from 'react';

function CartItem ({name, price, description, image_url, deleteItem, addItem}) {
   if (name === undefined)
    {return (
        <div>
            <p>{name} {price} {description} <img width="100"src={image_url} alt=""/></p>
            {/* <button>Remove from cart</button>
            <button>Add to cart</button> */} 
        </div>
    )}
    return (
        <div>
            <p>{name} {price} {description} <img width="100"src={image_url} alt=""/></p>
            <button onClick={deleteItem}>Remove from cart</button>
            <button onClick={addItem}>Add to cart</button>
        </div>
    )

}



export default CartItem;