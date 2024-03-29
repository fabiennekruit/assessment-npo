"use client";

import { useEffect, useState } from "react";
import fetchPokemons from "../../lib/fetch-pokemons";
import { TPokemon } from "../../types/Pokemon";
import { PokemonCard } from "../pokemon-card/pokemon-card";
import Loading from "@/app/loading";

export const PokemonCardList = () => {
  const [pokemon, setPokemon] = useState<TPokemon[]>([]);
  const limit = 20;
  let offset = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await fetchPokemons(limit, offset);
        setPokemon(pokemonData);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 ">
      {pokemon.length <= 0 ? (
        <Loading />
      ) : (
        pokemon.map((singlePokemon) => (
          <PokemonCard key={singlePokemon.id} pokemon={singlePokemon} />
        ))
      )}
    </ul>
  );
};
