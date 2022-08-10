import axios from '../utilities/axios'

export const httpRefreshAccessToken = ({ refresh_token }) => {
    const url = '/auth/refresh'
    return axios.post(url, { refresh_token: refresh_token })
}

export const httpLoginUser = (data) => {
    const url = '/auth/login'
    return axios.post(url, data)
}

export const httpLogoutUser = () => {
    const url = '/auth/logout'
    return axios.get(url)
}

export const httpGetUserMe = () => {
    return axios.get('/profile/me', { params: { response_type: 'extended' } })
}

export const httpResetPassword = (data) => {
    const url = '/password_recovery/create'
    return axios.post(url, data)
}

export const httpResetPasswordPermission = (access_token) => {
    const url = `/password_recovery/find/${access_token}`
    return axios.get(url)
}

export const httpResetPasswordConfirmation = (data) => {
    const url = '/password_recovery/reset'
    return axios.post(url, data)
}

export const httpChangePassword = (data) => {
    const url = '/profile/change-password'
    return axios.post(url, data)
}

export const httpUpdateProfile = (data) => {
    const url = `/profile/update`
    return axios.patch(url, data)
}

export const httpUpdateProfileAvatar = (data) => {
    const url = `/profile/avatar`
    return axios.post(url, data)
}

export const httpDeleteProfileAvatar = () => {
    const url = `/profile/avatar`
    return axios.delete(url)
}

export const httpDeleteProfile = ({ password }) => {
    const url = `/profile/delete`
    return axios.post(url, { password })
}



