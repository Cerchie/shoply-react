import React from "react";
import Products from './data'
import data from './data'
const INITIAL_STATE = {cart_items: [], total_products: data}

function rootReducer(state = INITIAL_STATE, action){
        switch(action.type){
            case 'ADD_TO_CART':
                return {...state, cart_items: [
                    ...state.cart_items, {...action.cart_item}
                ]}
            case 'REMOVE_FROM_CART' :
                return {...state, cart_items: 
                    state.cart_items.filter(cart_item => cart_item.id !== action.id)
                }
            default:
                return state;
        }
}

export default rootReducer;