import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { userInfo, token } = action.payload;
            state.userInfo = userInfo;
            state.token = token;
            state.isLoggedIn = true;
        },
        fetchUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.userInfo = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        updateUserInfo: (state, action) => {
            state.userInfo = { ...state.userInfo, ...action.payload };
        },
    },
});

export const { login, fetchUserInfo, logout, updateUserInfo } = authSlice.actions;

export default authSlice.reducer;
