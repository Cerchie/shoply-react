import React from 'react';
import { useSelector, useDispatch } from "react-redux";

function Cart(){
    const cart_items = useSelector(st => st.cart_items)
    console.log(cart_items)
    return (
        <div>
            {cart_items.map(i => <div>
                {i.id}
                {i.name} 
                {i.price} 
                <img width="100" src={i.image_url}/>
                {i.description}</div>)}
        </div>
    )
}

export default Cart;