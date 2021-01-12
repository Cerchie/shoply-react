import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'
import { useSelector, useDispatch } from "react-redux";
import {Provider} from 'react-redux'
import data from './reducers/data'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import './styles.css'

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
          <ProductList/>
      </Route>
      <Route exact path="/products/:id">
          <ProductDetail/>
      </Route>
      <Route exact path="/cart">
          <Cart/>
      </Route>
      </BrowserRouter>
    </div>
 
  );
}

export default App;