"use client";

import { PokemonCard } from "@/components/pokemon-card/pokemon-card";
import { PokemonContext } from "@/context/PokemonsContext/pokemons-context";
import { filterByType } from "@/lib/filter-by-type";
import React, { useContext } from "react";

const TypePage = ({ params }) => {
  const typeName = params;
  const pokemonData = useContext(PokemonContext);

  const filteredPokemon = filterByType(pokemonData, typeName.type);

  console.log("filtered: ", pokemonData, typeName);

  return (
    <div>
      <h2>{typeName.name} Pokémon</h2>
      <ul>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default TypePage;
