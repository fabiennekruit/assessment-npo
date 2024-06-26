"use client";

import { useContext, useEffect, useState } from "react";
import fetchPokemons from "../../lib/fetch-pokemons";
import { TPokemon } from "../../types/Pokemon";
import { PokemonCard } from "../pokemon-card/pokemon-card";
import Loading from "@/app/loading";
import { PokemonContext } from "@/context/PokemonsContext/pokemons-context";

export const PokemonCardList = () => {
  const pokemonData = useContext(PokemonContext);

  return (
    <ul className="grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 ">
      {pokemonData &&
        pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </ul>
  );
};
