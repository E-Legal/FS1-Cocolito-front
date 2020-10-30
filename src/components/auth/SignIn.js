import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { signIn } from '../../store/action/authActions';
import history from '../../history';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.signIn(email, password).then(() => {
      history.push('/');
    });
  }

  const { auth } = props;
  const { t } = useTranslation();

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white form_other">
        <h5 className="grey-text text-darken-3">{t('sign_in.label')}</h5>
        <div className="input-field">
          <label htmlFor="email">{t('sign_in_email.label')}</label>
          <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">{t('sign_in_password.label')}</label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0" type="submit">{t('sign_in_button.label')}</button>
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
  signIn: (email, password) => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
