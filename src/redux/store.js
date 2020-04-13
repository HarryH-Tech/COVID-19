import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { GET_WORLDWIDE_SUMMARY } from "./Actions";
import { rootReducer } from "./reducer";

export default createStore(rootReducer, applyMiddleware(thunk));
