import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import cardItems from "./reducers/cartItem";

const reducers = combineReducers({
  cardItems: cardItems,
});
const store = createStore(reducers);

export default store;
