import axios from "axios"


const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://6c4b-80-94-250-14.ngrok-free.app/'
})

export const registerAPI = (data) => {
    return instance.get(
        'api/Referals/user').then(response => response.data)
 }