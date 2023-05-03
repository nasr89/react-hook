import { createStore } from "redux";
import reducer from "./cakeReducer";

export const store = createStore(reducer);
