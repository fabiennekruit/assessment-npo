"use client";

import fetchPokemons from "@/lib/fetch-pokemons";
import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemons(64, 0);
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};
