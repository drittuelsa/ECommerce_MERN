import { applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { ReducerSet } from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";


export var StoreSet = createStore(ReducerSet, composeWithDevTools(applyMiddleware(thunk)))