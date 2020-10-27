import React from 'react';

import '../../../css/Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form_page">
    <input
      className="input_page"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
    />
    <button className="sendButton" onClick={(e) => sendMessage(e)}>Send</button>
  </form>
);

export default Input;
