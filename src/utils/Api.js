import axios from 'axios';

const url = 'https://fs1-cocolito-server.herokuapp.com';

export async function UserLogin(email, password) {
  return await axios.post(`${url}/users/login`, {
    email,
    password,
  });
}

export async function UserRegister(username, email, password) {
  return await axios.post(`${url}/users/register`, {
    username,
    email,
    password,
  });
}

export async function GetProfile() {
  const token = localStorage.getItem('token');
  return await axios.get(`${url}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
