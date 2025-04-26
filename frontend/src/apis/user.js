import api from "./axios"

export const apiRegister = (data) => {
    return api.post('api/v1/users/register', data);
}

export const apiLogin = (data) => {
    return api.post('api/v1/users/login', data);
}

