import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChatLobby = () => {
  const [room, setRoom] = useState('');
  const name = localStorage.getItem('username');

  return (
    <div className="container" align="center">
      <div className="row">
        <div className="input-field">
          <label htmlFor="room">Room</label>
          <input type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={(e) => ((!name || !room) ? e.preventDefault() : null)} to={`/chatroom?name=${name}&room=${room}`}>
          <button className="btn pink lighten-1 z-depth-0" type="submit">Join Lobby</button>
        </Link>
      </div>
    </div>
  );
};

export default ChatLobby;
