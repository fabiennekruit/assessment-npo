import { TPokemon } from "@/types/Pokemon";

const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<TPokemon[]> => {
  const promises = [];
  const totalPokemonsToFetch = limit + offset;

  for (let i = 1 + offset; i <= totalPokemonsToFetch; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  try {
    const result = await Promise.all(promises);

    const pokemonData = result.map((data) => ({
      id: data.id,
      name: data.name,
      image: data.sprites["front_default"],
    }));
    return pokemonData;
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
    throw new Error("Failed to fetch Pokémon");
  }
};

export default fetchPokemons;
