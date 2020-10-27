import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import '../../../css/Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i.id}><Message message={message} name={name} /></div>)}
  </ScrollToBottom>
);

export default Messages;
