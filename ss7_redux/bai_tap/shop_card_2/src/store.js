import { combineReducers, createStore } from "redux";
import { ProductReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
    ProductReducer:ProductReducer
}
)
export const store=createStore(rootReducer);