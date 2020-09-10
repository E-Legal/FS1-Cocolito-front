import axios from 'axios';
import cookie from 'react-cookies';

const url = "https://fs1-cocolito-server.herokuapp.com";

export async function UserRegister(username, email, password) {
    return await axios.post(url + "/users/register", {
        username: username,
        email: email,
        password: password,
    })
}

export async function UserLogin(email, password) {
    return await axios.post(url + "/users/login", {
        email: email,
        password: password,
    })
}

export async function GetProfile() {
    const token = cookie.load('token');
    return await axios.get(url + "/users/profile", {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}