import { combineReducers } from "redux";
import amountreducers from "./amountreducers";

const reducers = combineReducers({
  amount: amountreducers,
});

export default reducers;
