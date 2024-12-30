import { createSlice } from "@reduxjs/toolkit";


const initialState = 0

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => initialState,
        double: (state) => state * 2
    }
})

export default counterSlice.reducer

export const { increment, decrement, reset, double } = counterSlice.actions