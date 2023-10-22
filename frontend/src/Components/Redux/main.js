
import {combineReducers} from "redux";
import { ReducerSet } from "./reducer";

const rootreducers = combineReducers({
    getproductsdata : ReducerSet
});

export default rootreducers;