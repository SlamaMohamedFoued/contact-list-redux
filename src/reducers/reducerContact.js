import { ADD_CONTACT } from "../actions/types";

const initialState = [
  { name: "yosri", age: 50, id: 1 },
  { name: "mohamed", age: 50, id: 1 }
];

const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerContact;
