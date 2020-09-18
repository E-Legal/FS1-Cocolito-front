import React from 'react';
import onlineIcon from '../Icon/onlineIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><button className="btn">Leave Chat</button></a>
    </div>
  </div>
);

export default InfoBar;
