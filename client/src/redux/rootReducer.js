import { combineReducers } from "redux";
import CakeReducer from "./cake/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import UserReducer from "./user/userReducer";

export const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  user: UserReducer,
});
