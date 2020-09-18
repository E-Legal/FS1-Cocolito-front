import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import './Chatroom.css';
import io from 'socket.io-client';
import Messages from './Messages/Messages';
import TextContainer from './TextContainer/TextContainer';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';

let socket;

const Chatroom = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, props.location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const { auth } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;

  return (
      <div className="outerContainer">
        <div className="chat_container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <TextContainer users={users}/>
      </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(Chatroom);
