import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { useTranslation } from 'react-i18next';
import { signOut } from '../../store/action/authActions';

const SignedInLinks = (props) => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

  const { t } = useTranslation();

  return (
    <div>
      <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/create">{t('content.label')}</NavLink></li>
        <li><NavLink to="/chatlobby">{t('chat_lobby.label')}</NavLink></li>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <li><a href="/signin" onClick={props.signOut}>{t('logout.label')}</a></li>
        <li><a href="/profile"><i className="material-icons" style={{ fontSize: 36 }}>account_circle</i></a></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/create">{t('content.label')}</NavLink></li>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <li><a href="/signin" onClick={props.signOut}>{t('logout.label')}</a></li>
        <li><NavLink to="/chatlobby">{t('chat_lobby.label')}</NavLink></li>
        <li><a href="/profile"><i className="material-icons">account_circle</i></a></li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
