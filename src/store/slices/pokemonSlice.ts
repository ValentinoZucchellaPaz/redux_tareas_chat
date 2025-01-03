import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PokemonState } from "../types";


export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (pokemonName: string, thunkAPI) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            if (!res.ok) {
                throw new Error('Pokemon not found')
            }
            const data = await res.json()
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const initialState: PokemonState = {
    data: null,
    loading: false,
    error: null
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.data = action.payload
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.data = null
                state.loading = false
                state.error = action.payload.message as string
            })
    }
})

export default pokemonSlice.reducer