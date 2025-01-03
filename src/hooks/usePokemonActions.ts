import { fetchPokemon } from "../store/slices/pokemonSlice"
import { useAppDispatch } from "./store"

export default function usePokemonActions() {
    const dispatch = useAppDispatch()
    async function fetchPokemonAPI(pokemonName: string) {
        return await dispatch(fetchPokemon(pokemonName.trim().toLowerCase().replace(" ", "-")))
    }

    return { fetchPokemonAPI }
}