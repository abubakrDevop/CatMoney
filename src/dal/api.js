import axios from "axios"

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://267e-80-94-250-124.ngrok-free.app/'
});

export const profileAPI = {
    register (data) {
        return instance
            .post('api/User/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
    },

    auth (data) {
        return instance
            .post('api/User/auth', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.data)
    }

}



