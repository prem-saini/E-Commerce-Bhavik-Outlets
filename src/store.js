import { createStore } from "redux"
import rootreducer from "./reducers/Main"

const store = createStore(
    rootreducer
);

export default store;