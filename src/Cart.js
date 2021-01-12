import React from 'react';
import { useSelector, useDispatch } from "react-redux";

function Cart(){
    const dispatch = useDispatch();
    const cart_items = useSelector(st => st.cart_items)
    function addItem() {
        dispatch({ type: "ADD_TO_CART", cart_item:{ "name" : "another"}});
      
      }
      function deleteItem() {
        dispatch({ type: 'REMOVE_FROM_CART' });
      }
      function handleAdd(e){
          e.preventDefault();
          addItem()
      }
 
    console.log(cart_items)
    return (
        <div>
            {cart_items.map(i => <div>
                {i.id}
                {i.name} 
                {i.price} 
                <img width="100" src={i.image_url}/>
                {i.description}</div>)}
                <button onClick={addItem}>Add another</button>
                <button onClick={deleteItem}>remove all from cart</button>
        </div>
    )
}

export default Cart;