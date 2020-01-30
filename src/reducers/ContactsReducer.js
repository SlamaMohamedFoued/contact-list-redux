import { ADD_CONTACT } from "../actions/types";

const initialState = [
  {
    name: "foued",
    age: 24
  },
  {
    name: "Moez",
    age: 26
  }
];

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default ContactsReducer;
