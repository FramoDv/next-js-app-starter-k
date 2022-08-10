import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import {
    httpDeleteProfile,
    httpGetUserMe,
    httpLoginUser,
    httpLogoutUser,
    httpRefreshAccessToken,
    //httpRegisterUser,
} from '../../http-requests'
import LocalStorageManager from '../../utilities/localStorage'
import {
    ACCESS_TOKEN,
    CURRENT_USER,
    REFRESH_TOKEN,
} from '../../utilities/constants'

const sliceName = 'user'

export const login = createAsyncThunk(`${sliceName}/login`,
    async (authData, { rejectWithValue }) => {
        try {
            const { data: userData } = await httpLoginUser(authData)
            LocalStorageManager.setAuthData(userData)
            return userData
        } catch (err) {
            return rejectWithValue(err?.response?.data)
        }
    }
)

export const logout = createAsyncThunk(
    `${sliceName}/logout`,
    async (authData, { rejectWithValue }) => {
        try {
            const response = await httpLogoutUser()
            LocalStorageManager.removeAuthData()
            return response.data
        } catch (err) {
            return rejectWithValue(err?.response?.data)
        }
    }
)

export const userDelete = createAsyncThunk(
    `profile/delete`,
    async (password, thunkAPI) => {
        try {
            const response = await httpDeleteProfile({ password })
            LocalStorageManager.removeAuthData()
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err?.response?.data)
        }
    }
)

export const userMe = createAsyncThunk(`${sliceName}/me`, async () => {
    const response = await httpGetUserMe()
    LocalStorageManager.user.set(response.data)
    return response.data
})

export const attemptRefresh = createAsyncThunk(
    `${sliceName}/refresh`,
    async (refreshToken, { rejectWithValue }) => {
        try {
            const { data: authData } = await httpRefreshAccessToken({
                refresh_token: refreshToken,
            })
            LocalStorageManager.accessToken.set(authData[ACCESS_TOKEN])
            LocalStorageManager.refreshToken.set(authData[REFRESH_TOKEN])
            return authData
        } catch (err) {
            LocalStorageManager.removeAuthData()
            return rejectWithValue(err?.response?.data)
        }
    }
)

const user = createSlice({
    name: sliceName,
    initialState: {
        user: LocalStorageManager.user.get() || null,
        accessToken: LocalStorageManager.accessToken.get() || null,
        refreshToken: LocalStorageManager.refreshToken.get() || null,
        updatingUserData: false,
        signupStatus: null,//SIGNUP_STATUSES.initial,
        activities: {
            grouped: [],
            currentPage: 0,
            lastPage: 0,
            total: 0,
            perPage: 12,
        },
    },
    reducers: {
        setNewAccessToken: (state, action) => {
            state.accessToken = action.payload[ACCESS_TOKEN]
        },
        setNewRefreshToken: (state, action) => {
            state.refreshToken = action.payload[REFRESH_TOKEN]
        },
        updateUser: (state, action) => {
            state.user = action.payload
        },
        setSignupStatus: (state, action) => {
            state.signupStatus = action.payload
        },
        resetActivities: (state, action) => {
            state.activities = {
                grouped: [],
                currentPage: 0,
                lastPage: 0,
                total: 0,
                perPage: 12,
            }
        },
    },
    extraReducers: {
        [logout.fulfilled]: (state, action) => {
            state.accessToken = null
            state.refreshToken = null
            state.user = null
        },
        [login.fulfilled]: (state, action) => {
            state.accessToken = action.payload[ACCESS_TOKEN]
            state.refreshToken = action.payload[REFRESH_TOKEN]
            state.user = action.payload[CURRENT_USER]
        },
        [attemptRefresh.fulfilled]: (state, action) => {
            state.accessToken = action.payload[ACCESS_TOKEN]
            state.refreshToken = action.payload[REFRESH_TOKEN]
        },
        [attemptRefresh.rejected]: (state, action) => {
            state.accessToken = null
            state.refreshToken = null
            state.user = null
        },
        /*[signup.fulfilled]: (state, action) => {
            state.user = action.payload
            state.signupStatus = SIGNUP_STATUSES.completed
        },*/
        [userMe.fulfilled]: (state, action) => {
            state.user = action.payload
            state.updatingUserData = false
        },
        [userMe.pending]: (state) => {
            state.updatingUserData = true
        },
        [userDelete.fulfilled]: (state) => {
            state.refreshToken = null
            state.accessToken = null
            state.user = null
        },
        /*[fetchActivities.fulfilled]: (state, action) => {
            console.log('at the end of fetch ', [
                ...state.activities?.grouped,
                ...action.payload.data,
            ])
            state.activities = {
                grouped: [...state.activities?.grouped, ...action.payload.data],
                currentPage: action.payload.current_page,
                lastPage: action.payload.last_page,
                total: action.payload.total,
                perPage: +action.payload.per_page,
            }
        },*/
    },
})

// Selectors
const selectSelf = (state) => state[sliceName]
export const selectUser = createSelector(selectSelf, (state) => state.user)
export const selectAccessToken = createSelector(
    selectSelf,
    (state) => state.accessToken
)
export const selectRefreshToken = createSelector(
    selectSelf,
    (state) => state.refreshToken
)
export const selectIsUpdatingUserData = createSelector(
    selectSelf,
    (state) => state.updatingUserData
)

export const selectSignupStatus = createSelector(
    selectSelf,
    (state) => state.signupStatus
)

//Actions history
export const selectUserActivities = createSelector(
    selectSelf,
    (state) => state.activities?.grouped
)

export const selectActivitiesLastPage = createSelector(
    selectSelf,
    (state) => state.activities?.lastPage
)
export const selectActivitiesCurrentPage = createSelector(
    selectSelf,
    (state) => state.activities?.currentPage
)
export const selectActivitiesTotal = createSelector(
    selectSelf,
    (state) => state.activities?.total
)
export const selectActivitiesPerPage = createSelector(
    selectSelf,
    (state) => state.activities?.perPage
)

export const {
    setNewAccessToken,
    setNewRefreshToken,
    updateUser,
    setSignupStatus,
    resetActivities,
} = user.actions
export default user.reducer
