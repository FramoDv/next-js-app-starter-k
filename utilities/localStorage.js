import {
    ACCESS_TOKEN,
    REFRESH_TOKEN,
    CURRENT_USER,
    LOCAL_STORAGE_ACCESS_TOKEN,
    LOCAL_STORAGE_REFRESH_TOKEN,
    LOCAL_STORAGE_USER,
} from './constants'

const accessToken = {
    set: (value) => {
        (typeof window !== "undefined") && localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, value)
    },
    get: () => {
        return (typeof window !== "undefined") && localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN)
    },
    remove: () => {
        (typeof window !== "undefined") && localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN)
    },
}

const refreshToken = {
    set: (value) => {
        (typeof window !== "undefined") && localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN, value)
    },
    get: () => {
        return (typeof window !== "undefined") && localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN)
    },
    remove: () => {
        (typeof window !== "undefined") && localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN)
    },
}

const user = {
    set: (value) => {
        (typeof window !== "undefined") && localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(value))
    },
    get: () => {
        return (typeof window !== "undefined") && JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER))
    },
    remove: () => {
        (typeof window !== "undefined") && localStorage.removeItem(LOCAL_STORAGE_USER)
    },
}

const setAuthData = (authData) => {
    accessToken.set(authData[ACCESS_TOKEN])
    refreshToken.set(authData[REFRESH_TOKEN])
    user.set(authData[CURRENT_USER])
}

const removeAuthData = () => {
    accessToken.remove()
    refreshToken.remove()
    user.remove()
}

const LocalStorageManager = {
    accessToken,
    refreshToken,
    user,
    setAuthData,
    removeAuthData,
}

export default LocalStorageManager
