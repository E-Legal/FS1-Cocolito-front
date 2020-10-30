import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import { useTranslation } from 'react-i18next';

const SignedOutLinks = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

  const { t } = useTranslation();

  return (
    <div>
      <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/signup">{t('sign_up_bar.label')}</NavLink></li>
        <li><NavLink to="/signin">{t('login.label')}</NavLink></li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/signup">{t('sign_up_bar.label')}</NavLink></li>
        <li><NavLink to="/signin">{t('login.label')}</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
