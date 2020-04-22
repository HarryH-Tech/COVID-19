import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { covidReducer } from "./reducer";

const rootReducer = covidReducer;

export default createStore(rootReducer, applyMiddleware(thunk));
