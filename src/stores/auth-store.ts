import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_KEY, USER_KEY } from "constants/auth-constants";
import { User } from "types/user";

import type { RootState } from "stores/store";

interface AuthState {
    token: string | null,
    userDetails: User | null,
    isAuthenticated: boolean,
};

const mapToUserDetails = (payload: any): User => {
    return {
        id: payload.id,
        email: payload.email,
        username: payload.username,
    };
}

const token = localStorage.getItem(TOKEN_KEY);
const userDetails = localStorage.getItem(USER_KEY);

const initialState: AuthState = {
    token,
    userDetails: userDetails ? JSON.parse(userDetails) : userDetails,
    isAuthenticated: !!userDetails,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state: AuthState, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userDetails = mapToUserDetails(action.payload);
            
            if (state.token !== null){
                localStorage.setItem(TOKEN_KEY, state.token);
            }

            if (state.userDetails){
                localStorage.setItem(USER_KEY, JSON.stringify(state.userDetails));
            }
        },
        logOut: (state: AuthState) => {
            state.isAuthenticated = false;
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
        },
    },
}); 

export const { logOut, setCredentials } = authSlice.actions;
export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;
export const selectAuthUser = (state: RootState) => state.auth.userDetails;