import { useEffect, useState } from "react";
import fetchPokemons from "../../lib/fetch-pokemons";
import { TPokemon } from "../../types/Pokemon";
import { PokemonCard } from "../pokemon-card/pokemon-card";

const IndexPage = () => {
  const [pokemon, setPokemon] = useState<TPokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemons(96);
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map((singlePokemon) => (
          <PokemonCard key={singlePokemon.id} pokemon={singlePokemon} />
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
