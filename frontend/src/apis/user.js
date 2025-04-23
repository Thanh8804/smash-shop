import api from "./axios"

export const apiRegister = (data) => {
    return api.post('/users/register', data);
}

export const apiLogin = (data) => {
    return api.post('/users/login', data);
}
