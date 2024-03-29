"use client";

import { useContext, useEffect, useState } from "react";
import { TPokemon } from "../../types/Pokemon";
import { PokemonCard } from "../pokemon-card/pokemon-card";
import Loading from "@/app/loading";
import { PokemonContext } from "@/context/PokemonsContext/pokemons-context";
import { filterByType } from "@/lib/filter-by-type";

export const PokemonTypeList = ({ typeName, currentPokemonName }) => {
  const pokemonData = useContext(PokemonContext);
  const filteredPokemon = filterByType(pokemonData, typeName.type.name);
  console.log(typeName.type.name);

  const limitedPokemon = filteredPokemon
    .filter((pokemon) => pokemon.name !== currentPokemonName) // Exclude the current Pokemon
    .slice(0, 3); // Limit the number of Pokemon to a maximum of 3

  return (
    <ul className="grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 ">
      {filteredPokemon &&
        limitedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </ul>
  );
};
