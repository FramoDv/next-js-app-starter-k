import axios from './index'
import LocalStorageManager from '../localStorage'
import store from '../../store'
import { attemptRefresh } from '../../store/slices/user'

const endpointToIgnore = ['/auth/refresh', '/auth/login']

export const axiosAttachInterceptors = () => {
    const requestInterceptor = axios.interceptors.request.use((request) => {
        const token = LocalStorageManager.accessToken.get()
        if (token) request.headers['Authorization'] = `Bearer ${token}`
        return request
    })
    // enable global response handling
    const responseInterceptor = axios.interceptors.response.use(
        (response) => {
            // pass response without change
            return response
        },
        async (error) => {
            // get error info
            let statusCode = error?.response?.status
            let originalRequest = error.config

            switch (statusCode) {
                case 401:
                    const refreshToken = LocalStorageManager.refreshToken.get()
                    LocalStorageManager.accessToken.remove()
                    if (
                        refreshToken &&
                        !originalRequest._retry &&
                        !endpointToIgnore.includes(error.config.url)
                    ) {
                        originalRequest._retry = true // prevent infinite retry loop
                        await store.dispatch(attemptRefresh(refreshToken))
                        return axios.request(originalRequest)
                    }
                    return Promise.reject(error)
                default:
                    return Promise.reject(error)
            }
        }
    )

    return { requestInterceptor, responseInterceptor }
}

// define function which updates axios authorization header
export const setTokenToAxios = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const removeTokenFromAxios = () => {
    axios.defaults.headers.common['Authorization'] = null
}
