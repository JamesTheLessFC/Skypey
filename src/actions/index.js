import { 
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  SET_TYPING_VALUE_TO_EDIT_MSG,
  EDIT_MESSAGE
} from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const setTypingValueToEditMsg = (text, number) => ({
  type: SET_TYPING_VALUE_TO_EDIT_MSG,
  payload: {
    text,
    number
  }
});

export const editMessage = (text, userId, number) => ({
  type: EDIT_MESSAGE,
  payload: {
    text,
    userId,
    number
  }
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export const deleteMessage = (activeUserId, number) => ({
  type: DELETE_MESSAGE,
  payload: {
    activeUserId,
    number
  }
});