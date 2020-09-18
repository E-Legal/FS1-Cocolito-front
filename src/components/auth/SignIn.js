import React, { useState } from 'react';
import { connect } from 'react-redux';
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

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white form_other">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
      <div className="center red-text" style={{ fontSize: 20 }}>
        { props.auth.auth.AuthError ? <p>{props.auth.auth.AuthError}</p> : null }
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
