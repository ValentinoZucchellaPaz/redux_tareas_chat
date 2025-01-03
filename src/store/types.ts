import store from ".";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// ------Counter------
export interface CounterState {
    count: number,
    loading: boolean,
    error: string | null
}

// ------Pokemon------
export interface PokemonState {
    data: Pokemon | null,
    loading: boolean,
    error: string | null
}

export interface PokemonType {
    type: {
        name: string;
    };
}

export interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string; // URL de la imagen del Pokémon
    };
    types: PokemonType[]; // Un Pokémon puede tener varios tipos
    height: number;
    weight: number;
}

// ------Counter------
export interface User {
    id: number,
    name: string,
    email: string
}

export interface UserState {
    user: User | null,
    isLoggedIn: boolean
}