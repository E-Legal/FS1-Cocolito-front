import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logIn } from '../../store/action/authActions';
import history from '../../history';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.logIn(email, username, password).then(() => {
      history.push('/signin');
    });
  }

  const { auth } = props;
  const { t } = useTranslation();

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white form_other">
        <h5 className="grey-text text-darken-3">{t('sign_up.label')}</h5>
        <div className="input-field">
          <label htmlFor="email">{t('sign_up_email.label')}</label>
          <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="username">{t('sign_up_username.label')}</label>
          <input type="text" id="username" onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">{t('sign_up_password.label')}</label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">{t('sign_up_button.label')}</button>
        </div>
      </form>
      <div className="center red-text" style={{ fontSize: 20 }}>
        { auth.auth.AuthError ? <p>{auth.auth.AuthError}</p> : null }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, username, password) => dispatch(logIn(email, username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
