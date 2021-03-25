import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "362378ce-e9ba-4c20-adb6-82bbde6397bd"
    }
})

export const authAPI = {
    isAuth() {
        return instance.get(`auth/me`)
    }
}

export const usersAPI = {
    getUsers(currentPage =1, pageSize =10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)        
    },
    unfollow(id=1) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id=1) {
        return instance.post(`follow/${id}`,{})
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{ status: status })
    }
}



