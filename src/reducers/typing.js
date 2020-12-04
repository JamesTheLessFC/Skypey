import { EDIT_MESSAGE, SEND_MESSAGE, SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SET_TYPING_VALUE_TO_EDIT_MSG } from "../constants/action-types";

export default function typing(state = {
  text: "",
  messageToEdit: null
}, action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return {
        ...state,
        text: action.payload
      }
    case SET_TYPING_VALUE_TO_EDIT_MSG:
      return {
        text: action.payload.text,
        messageToEdit: action.payload.number
      }
    case SEND_MESSAGE: 
      return {
        ...state,
        text: ""
      };
    case EDIT_MESSAGE:
      return {
        text: "",
        messageToEdit: null
      }
    case SET_ACTIVE_USER_ID:
      return {
        text: "",
        messageToEdit: null
      }
    default: 
      return state;
  }
}