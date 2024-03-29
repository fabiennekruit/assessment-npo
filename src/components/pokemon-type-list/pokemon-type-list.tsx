"use client";

import { useContext, useEffect, useState } from "react";
import { TPokemon } from "../../types/Pokemon";
import { PokemonCard } from "../pokemon-card/pokemon-card";
import Loading from "@/app/loading";
import { PokemonContext } from "@/context/PokemonsContext/pokemons-context";
import { filterByType } from "@/lib/filter-by-type";

export const PokemonTypeList = ({ typeName }) => {
  const pokemonData = useContext(PokemonContext);
  const filteredPokemon = filterByType(pokemonData, typeName.type.name);
  console.log(typeName.type.name);
  return (
    <ul className="grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 ">
      {filteredPokemon &&
        filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </ul>
  );
};
