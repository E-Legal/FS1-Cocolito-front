import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/ChatLobby.css';
import { useTranslation } from 'react-i18next';

const ChatLobby = () => {
  const [room, setRoom] = useState('');
  const name = localStorage.getItem('username');
  const { t } = useTranslation();

  return (
    <div className="joinOuterContainer" align="center">
      <div className="joinInnerContainer">
        <div>
          <label htmlFor="room">{t('tittle_chat.label')}</label>
          <input type="text" className="joinInput" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={(e) => ((!name || !room) ? e.preventDefault() : null)} to={`/chatroom?name=${name}&room=${room}`}>
          <button className="btn pink lighten-1 z-depth-0" type="submit">{t('button_chat.label')}</button>
        </Link>
      </div>
    </div>
  );
};

export default ChatLobby;
