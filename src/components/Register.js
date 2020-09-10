import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, FormGroup, FormControl, FormLabel, Toast,
} from 'react-bootstrap';
import { UserRegister } from '../utils/Api';
import '../css/Login.css';

export default function Register() {
  const [apireturn, setApiReturn] = useState('');
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0 && username.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    UserRegister(username, email, password).then((response) => {
      history.push('/login');
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
        <FormGroup controlId="username">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
          Register
        </Button>
      </form>
    </div>
  );
}
