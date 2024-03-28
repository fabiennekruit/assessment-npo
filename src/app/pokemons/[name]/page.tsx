"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TDetailPokemon } from "@/types/DetailPokemon";
import { TPokemon } from "@/types/Pokemon";

const PokemonDetail = ({ params }: { params: TPokemon }) => {
  const currentPokemon = params;
  const [pokemon, setPokemon] = useState<TDetailPokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${currentPokemon.name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon");
        }
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    if (currentPokemon) {
      fetchPokemonDetail();
    }
  }, [currentPokemon]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <Carousel
            className="max-w-screen-sm mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="basis-full">
                <Image
                  width="200"
                  height="200"
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  width="200"
                  height="200"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
