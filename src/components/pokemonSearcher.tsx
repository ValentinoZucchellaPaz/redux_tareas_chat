import { useAppSelector } from "../hooks/store"
import { PokemonCard } from "./pokemonCard"
import { Button, Heading, Input } from "@chakra-ui/react"
import { Field } from "./ui/field"
import usePokemonActions from "../hooks/usePokemonActions"

export function PokemonSearcher() {
    const { data, loading, error } = useAppSelector((state) => state.pokemon)
    const { fetchPokemonAPI } = usePokemonActions()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const pokemonName = formData.get('pokemon-name') as string


        if (pokemonName.trim() !== '') {
            const res = await fetchPokemonAPI(pokemonName)
            if (res.type === "pokemon/fetchPokemon/fulfilled") {
                form.reset()
            }
        }
    }

    return (
        <div className="m-auto my-5 rounded-lg bg-gray-900 p-8">
            <Heading className="text-teal-500 text-2xl font-bold">
                Pokemon searcher
            </Heading>
            <form onSubmit={handleSubmit} className="flex flex-col my-5 gap-4">
                <Field label="Nombre del Pokemon">
                    <Input placeholder="ej. pikachu" name="pokemon-name" variant="subtle" className="px-3" />
                </Field>
                <Button type="submit" className="w-fit m-auto">Buscar pokemon</Button>
            </form>
            {loading && <span className="spinner"></span>}
            {(error && !loading) && <p>Error: {error}</p>}
            {data && <PokemonCard pokemon={data} />}
        </div>
    )
}