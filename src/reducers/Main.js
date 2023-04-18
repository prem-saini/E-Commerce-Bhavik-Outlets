import { combineReducers } from 'redux'
import { cartreducer } from "./Reducers"
import { fetchProducts } from '../actions/ProductAction';
import { productsReducer } from './ProductsReducer';

const rootreducer = combineReducers({
    cartreducer,
    app: productsReducer

});

export default rootreducer