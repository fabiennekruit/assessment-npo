import Link from "next/link";
import Image from "next/image";
import { TPokemon } from "@/types/Pokemon";

type TPokemonCardProps = {
  pokemon: TPokemon;
};

export function PokemonCard({ pokemon }: TPokemonCardProps) {
  return (
    <li key={pokemon.id}>
      <Link href={`/pokemons/${pokemon.name}`}>
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={100}
          height={100}
        />
        <h3>{pokemon.name}</h3>
      </Link>
    </li>
  );
}
