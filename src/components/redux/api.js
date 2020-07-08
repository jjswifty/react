import * as axios from 'axios';
const API_KEY = '';

// DATA ACCESS LAYER.

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': API_KEY
    }
})



export const usersAPI = {
    getUsers (pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
    getProfile (userId) {
        return instance.get(`profile/${!userId ? 2 : userId}`)
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    }
}


