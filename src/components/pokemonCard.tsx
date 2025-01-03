import { Badge, Card, Image } from "@chakra-ui/react";
import { Pokemon } from "../store/types";

interface PokemonCardProps {
    pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
    const { id, name, sprites, types, height, weight } = pokemon

    return (
        <Card.Root width="320px" margin="auto">
            <Card.Body className="flex flex-col items-center">
                <Image
                    src={sprites.front_default}
                    alt="pokemon-card-img"
                    width="200px"
                />
                <Card.Title fontWeight="bold">{name.toUpperCase()}</Card.Title>
                <div className="flex flex-row gap-2">
                    {types.map(pokemonType => (
                        <Badge
                            key={pokemonType.type.name}
                            colorPalette="green">
                            {pokemonType.type.name}
                        </Badge>
                    ))}
                </div>
                <Card.Description>Pokedex id: {id}</Card.Description>
                <Card.Description>Altura: {(height / 10).toString().replace(".", ",")} m</Card.Description>
                <Card.Description>Peso: {(weight / 10).toString().replace(".", ",")} kg</Card.Description>
            </Card.Body>
        </Card.Root>
    )
}