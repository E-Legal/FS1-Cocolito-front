import axios from 'axios';

const api_url = "https://fs1-cocolito-server.herokuapp.com";

export const signIn = (credentials) => (dispatch) => axios.post(api_url + '/users/login', {
  email: credentials.email,
  password: credentials.password,
}).then((response) => {
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('id', response.data.id);
  dispatch({ type: 'LOGIN_SUCCESS' });
}).catch((err) => {
  dispatch({ type: 'LOGIN_ERROR', err });
});

export const logIn = (credentials) => (dispatch) => axios.post(api_url + '/users/register', {
  email: credentials.email,
  username: credentials.username,
  password: credentials.password
}).then(() => {
  dispatch({ type: 'SIGNIN_SUCCESS' });
}).catch((err) => {
  dispatch({ type: 'SIGNIN_ERROR', err })
});

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  dispatch({ type: 'SIGNOUT_SUCCES' });
};
