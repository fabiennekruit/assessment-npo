"use client";

import Image from "next/image";
import { PokemonContext } from "@/context/PokemonsContext/pokemons-context";
import { useContext, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TPokemon } from "@/types/Pokemon";
import PokemonDetailTable from "../pokemon-detail-table/pokemon-detail-table";
import { PokemonTypeList } from "../pokemon-type-list/pokemon-type-list";

const PokemonDetail = ({ params }: { params: string }) => {
  const currentPokemon = params;
  const pokemonData = useContext(PokemonContext);

  const pokemon = pokemonData.find(
    (pokemon: TPokemon) => pokemon.name === currentPokemon
  );

  return (
    <div>
      {pokemon ? (
        <div>
          <Carousel
            className="max-w-screen-sm mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {pokemon.images.map((image: string, index: number) => {
                return (
                  <CarouselItem key={index}>
                    <Image
                      className="disable-blur"
                      width="200"
                      height="200"
                      src={image}
                      alt={pokemon.name}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <PokemonDetailTable
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
          <PokemonTypeList typeName={pokemon.types[0]} />
        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
