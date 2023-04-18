import { createStore, applyMiddleware, compose } from "redux"
import rootreducer from "./reducers/Main"
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/ProductsReducer";

const store = createStore(
    rootreducer,
    applyMiddleware(thunk),
    // productsReducer
);

export default store;