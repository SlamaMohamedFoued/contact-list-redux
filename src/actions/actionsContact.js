import { ADD_CONTACT } from "./types";

export const addContact = newContact => {
  return {
    type: ADD_CONTACT,
    payload: newContact
  };
};
