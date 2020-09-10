import React, { useState } from 'react';
import {
  Button, FormGroup, FormControl, FormLabel, Toast,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import cookie from 'react-cookies';
import { UserLogin } from '../utils/Api';
import '../css/Login.css';

const Login = ({ callback }) => {
  const [apireturn, setApiReturn] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    UserLogin(email, password).then((response) => {
      cookie.save('id', response.data.id, { path: '/' });
      cookie.save('token', response.data.token, { path: '/' });
      callback(true);
      history.push('/home');
    }).catch((error) => {
      setApiReturn(error.response.data);
      setShow(true);
    });
  }

  return (
    <div className="Login">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body>{apireturn}</Toast.Body>
      </Toast>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
        <p className="Register_text">
          <a href="/register">Click Here</a>
          {' '}
          to create your account
        </p>
      </form>
    </div>
  );
};

export default Login;
