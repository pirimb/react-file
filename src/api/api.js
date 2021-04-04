import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ad95c92f-47dc-4c0e-89da-1f1ba9abab4d"
    }
})

export const authAPI = {
    isAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login`,{ email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    }    
}

export const securityAPI = {
    captcha() {
        return instance.get(`security/get-captcha-url`)
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
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{ status: status })
    },
    updatePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileData(profileData) {
        return instance.put(`profile`, profileData)
    }
}

