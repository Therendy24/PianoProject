import {createStore, combineReducers, apllyMiddleware, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//Reducers
import { cartReducer} from './reducers/cartReducers'
import {
    getProductsReducer,
    getProductDetailsReducer,
  } from "./reducers/productReducers";

  const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
  });

//helps to create async request in our actions 
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)) 
);

export default store;