import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem('AUTH_TOKEN') ?? '';
const userDetails = localStorage.getItem('AUTH_USER');

const initialState = {
    token,
    userDetails: userDetails,// ? JSON.parse(userDetails) : userDetails,
    isAuthenticated: !!userDetails,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userDetails = action.payload.userDetails;
            localStorage.setItem('AUTH_TOKEN', state.token);
            localStorage.setItem('AUTH_USER', JSON.stringify(state.userDetails));
        },
        logOut: state => {
            state.isAuthenticated = false;
            localStorage.removeItem('AUTH_TOKEN');
            localStorage.removeItem('AUTH_USER');
        },
    },
}); 

export const { logOut, setCredentials } = authSlice.actions;
export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;
export const authReduces = authSlice.reducer;