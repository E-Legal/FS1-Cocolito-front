import axios from 'axios'

const url = "mon url";

export async function UserRegister(username, email, password) {
    return await axios.post(url + "/register", {
        username, email, password,
    })
}

export async function UserLogin(email, password) {
    return await axios.post(url + "/login", {
        email: email,
        password: password,
    })
}

