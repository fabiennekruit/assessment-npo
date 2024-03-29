import { TDetailPokemon } from "@/types/DetailPokemon";

export const fetchPokemonDetail = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon");
    }

    const result = await response.json();

    const pokemonData: TDetailPokemon = {
      id: result.id,
      weight: result.weight,
      height: result.height,
      types: result.types,
      abilities: result.abilities,
      name: result.name,
      images: [result.sprites["front_default"], result.sprites["back_default"]],
    };

    return pokemonData;
  } catch (error) {
    throw new Error(error.message);
  }
};
