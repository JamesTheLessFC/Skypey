import { getMessages } from "../static-data";
import { 
  SEND_MESSAGE,
  DELETE_MESSAGE,
  EDIT_MESSAGE
} from "../constants/action-types";
const _ = require("lodash");

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case DELETE_MESSAGE:
      const id = action.payload.activeUserId;
      const msgNumber = action.payload.number;
      const userMsgs = state[id];
      return {
        ...state,
        [id]: _.omit(userMsgs, msgNumber)
      }
    case EDIT_MESSAGE:
      const text = action.payload.text;
      const num = action.payload.number;
      const activeId = action.payload.userId;
      const userMessages = state[activeId];
      return {
        ...state,
        [activeId]: {
          ...userMessages,
          [num]: {
            number: num,
            text: text + " (edited)",
            is_user_msg: true
          }
        }
      }
    default:
      return state;
  }
}
