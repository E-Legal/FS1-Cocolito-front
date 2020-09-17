import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import '../../css/Chatroom.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

const Chatroom = (props) => {
  const [state, setStaet] = useState({ message: '', name: localStorage.getItem('username') });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (e) => {
    setStaet({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    if (message.length > 0) {
      socket.emit('message', { name, message });
      setStaet({ message: '', name });
    }
  };

  const renderChat = () => chat.map(({ name, message }, index) => (
    <div key={index} className="card z-depth-0 project-summary">
      <div className="card-content green-text text-darken-3">
        <pre className="green-text">
          {name}
          {' '}
          :
          {' '}
          {message}
        </pre>
      </div>
    </div>
  ));

  const { auth } = props;
  if (!auth.auth.IsAuth) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m5 offset-m1">
          <form onSubmit={onMessageSubmit}>
            <div className="input-field">
              <TextField
                name="message"
                onChange={(e) => onTextChange(e)}
                value={state.message}
                multiline
                rowsMax={20}
                inputProps={{ min: 1 }}
                id="filled-multiline-flexible"
                variant="filled"
                label="Message"
              />
            </div>
            <button className="btn grey lighten-1 z-depth-0">Send Message</button>
          </form>
        </div>
        <div className="col s12 m6 chatroom_page">
          <h2>CHAT LOG :</h2>
          {renderChat()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
});

export default connect(mapStateToProps)(Chatroom);
