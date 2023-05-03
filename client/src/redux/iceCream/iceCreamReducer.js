import { BUY_ICECREAM } from "./actionTypes";

const initialState = {
  numberOfIceCreams: 20,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default reducer;
