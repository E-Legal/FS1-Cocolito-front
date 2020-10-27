import axios from 'axios';

const apiUrl = 'https://fs1-cocolito-server.herokuapp.com';

export function GetProfileId(profile) {
  return {
    type: 'GET_PROFILEID_SUCCESS',
    profile,
  };
}

export function GetProfile(profile) {
  return {
    type: 'GET_PROFILE_SUCCESS',
    profile,
  };
}

export const signIn = (email, password) => (dispatch) => axios.post(`${apiUrl}/users/login`, {
  email,
  password,
}).then((response) => {
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('id', response.data.id);
  localStorage.setItem('username', response.data.username);
  dispatch({ type: 'LOGIN_SUCCESS' });
}).catch((err) => {
  dispatch({ type: 'LOGIN_ERROR', err });
});

export const logIn = (email, username, password) => (dispatch) => axios.post(`${apiUrl}/users/register`, {
  email,
  username,
  password,
}).then(() => {
  dispatch({ type: 'SIGNIN_SUCCESS' });
}).catch((err) => {
  dispatch({ type: 'SIGNIN_ERROR', err });
});

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  dispatch({ type: 'SIGNOUT_SUCCES' });
};

export const getProfile = () => (dispatch) => axios.get(`${apiUrl}/users/profile`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(GetProfile(response.data));
}).catch((err) => {
  dispatch({ type: 'GET_PROFILE_FAIL' }, err);
});

export const getProfileId = (userid) => (dispatch) => axios.get(`${apiUrl}/users/${userid.id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((response) => {
  dispatch(GetProfileId(response.data));
}).catch((err) => {
  dispatch({ type: 'GET_PROFILEID_FAIL' }, err);
});
