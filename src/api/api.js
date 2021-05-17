import * as axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bab5eb69-9682-4eb9-abfa-a16987f89e90'
    }
})

export const usersAPI = {
     getUsers(pageSize = 5, currentPage = 1)   {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return  response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`unFollow/${userId}`)
    },
    getProfile(userId){
         return instance.get(`profile/${userId}`)
    },
}

export const authAPI = {
   me() {
     return   instance.get(`auth/me`)
   }
}

