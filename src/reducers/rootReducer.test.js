import React, {getState} from 'react'
import { render, screen } from '@testing-library/react';
import rootReducer from './rootReducer';

let store = createStore(rootReducer)
expect(store.getState().cart_items).toEqual(cart_items([]))