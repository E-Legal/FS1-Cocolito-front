import React from 'react';
import { useTranslation } from 'react-i18next';
import onlineIcon from '../Icon/onlineIcon.png';
import '../../../css/InfoBar.css';

const InfoBar = ({ room }) => {
  const { t } = useTranslation();
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <button className="btn" type="button">{t('info_bar.label')}</button>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
