import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom'
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'
import { useSelector, useDispatch } from "react-redux";
import {Provider} from 'react-redux'
import CartItem from './CartItem'



function ProductList(){

const cart_items = useSelector(st => st.cart_items);
const total_products = useSelector(st => st.total_products)
const dispatch = useDispatch();

console.log("DATA FROM PRODUCT LIST", Object.entries(total_products.products))
  function addItem(newItem) {
    dispatch({ type: "ADD_TO_CART", cart_item: newItem });
  }
  function deleteItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  let arrays_to_map = Object.entries(total_products.products);



return (
    <div>
                <h1>Cart</h1>
                <p>Number of items in cart: {cart_items.length}</p>
        {arrays_to_map[0].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}
        {arrays_to_map[1].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}
        {arrays_to_map[2].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}
        {arrays_to_map[3].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}
        {arrays_to_map[4].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}
            {arrays_to_map[5].map(p => (
    <CartItem
      key={p.id}
      name={p.name}
      price={p.price}
      description={p.description}
      image_url={p.image_url}
      deleteItem={deleteItem}
      addItem={addItem}
    />  
        ))}

    </div>
)

}

  export default ProductList;