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
import { fetchPokemonDetail } from "@/lib/fetch-pokemon-detail";

const PokemonDetail = ({ params }: { params: string }) => {
  const currentPokemon = params;
  const [pokemon, setPokemon] = useState<TDetailPokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pokemonData = await fetchPokemonDetail(currentPokemon);
        setPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
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
              {pokemon.images.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <Image
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
        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
