import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../types";

const initialState: UserState = {
    user: null,
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.user = null
            state.isLoggedIn = false
        }
    }
})

export default userSlice.reducer

export const { login, logout } = userSlice.actions