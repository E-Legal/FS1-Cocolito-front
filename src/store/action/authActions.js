import axios from 'axios';

export const signIn = (credentials) => (dispatch) => axios.post('https://fs1-cocolito-server.herokuapp.com/users/login', {
  email: credentials.email,
  password: credentials.password,
}).then((response) => {
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('id', response.data.id);
  dispatch({ type: 'LOGIN_SUCCESS' });
}).catch((err) => {
  dispatch({ type: 'LOGIN_ERROR', err });
});

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  dispatch({ type: 'SIGNOUT_SUCCES' });
};
