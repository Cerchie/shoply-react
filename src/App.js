import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-dom'
import ProductList from './ProductList'
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'
import { useSelector, useDispatch } from "react-redux";
import {Provider} from 'react-redux'
import data from './reducers/data'
import './styles.css'

function App() {

  return (
    
    <div className="App">
          <ProductList/>
    </div>
 
  );
}

export default App;