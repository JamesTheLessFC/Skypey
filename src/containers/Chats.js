import React, { Component } from "react";
import "./Chats.css";
import store from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { deleteMessage, setTypingValueToEditMsg } from '../actions';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const Chat = ({ message }) => {
  const { text, is_user_msg, number } = message;
  const { activeUserId } = store.getState();
  return (
    <div className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
      {is_user_msg ? <FontAwesomeIcon className="delete" icon={faTimesCircle} onClick={() => store.dispatch(deleteMessage(activeUserId, number))} /> : ""}
      {is_user_msg ? <FontAwesomeIcon className="edit" icon={faEdit} onClick={() => store.dispatch(setTypingValueToEditMsg(text, number))} /> : ""}
      {text}
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;