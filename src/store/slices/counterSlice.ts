import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../types";

const initialState: CounterState = {
    count: 0,
    loading: false,
    error: null
}

export const fetchCounterFromAPI = async (): Promise<number> => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const rand = Math.floor(Math.random() * 100)
            if (rand > 50) {
                resolve(rand)
            } else {
                reject(`El numero no es mayor a 50 (${rand})`)
            }
        }, 1000)
    );
};

export const fetchCount = createAsyncThunk(
    'counter/fetchCount',
    async (_, thunkAPI) => {
        try {
            const count = await fetchCounterFromAPI()
            return count
        } catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const counterSlice = createSlice({
    name: 'counter', //nombre q identifica al slice en store
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
            state.error = null
        },
        decrement: (state) => {
            state.count -= 1
            state.error = null
        },
        reset: () => initialState,
        double: (state) => {
            state.count *= 2
        },
        square: (state) => {
            state.count **= 2
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.count = action.payload
            })
            .addCase(fetchCount.rejected, (state, action) => {
                state.count = 0
                state.loading = false
                state.error = action.payload as string
            })
    },
})

// los reducer que van en store
export default counterSlice.reducer

// accion que luego indica reducer (evita escribir el path del reducer y lo identifica directo)
export const { increment, decrement, reset, double, square } = counterSlice.actions