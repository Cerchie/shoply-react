import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers/rootReducer';
function CartItem ({key, id, name, price, description, image_url, deleteItem, addItem}) {
    function handleAdd(e) {
        e.preventDefault();
        addItem({key, id, name, price, description, image_url});
      }
  
    function handleDelete(e){
        e.preventDefault()
        deleteItem(key)
    }
    
   if (name === undefined)
    {return (
        <div>
            <p>item below</p>
            {/* <button>Remove from cart</button>
            <button>Add to cart</button> */} 
        </div>
    )}
    return (
        <div>
            <p>{name} <img width="100"src={image_url} alt=""/></p>
            <Link to={`/products/${id}`}>details</Link>
            <button onClick={handleDelete}>Empty cart</button>
            <button onClick={handleAdd}>Add to cart</button>
        </div>
    )

}



export default CartItem;