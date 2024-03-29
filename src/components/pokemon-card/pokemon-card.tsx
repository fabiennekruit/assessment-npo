import Link from "next/link";
import Image from "next/image";
import { TPokemon } from "@/types/Pokemon";

type TPokemonCardProps = {
  pokemon: TPokemon;
};

export function PokemonCard({ pokemon }: TPokemonCardProps) {
  return (
    <li
      key={pokemon.id}
      className="rounded-sm border border-gray-200 shadow-sm"
    >
      <Link
        href={`/${pokemon.types[0].type.name}/${pokemon.name}`}
        className="w-full h-full"
      >
        <div className="flex flex-col items-center gap-2 p-2">
          <Image
            className="disable-blur"
            src={pokemon.images[0]}
            alt={pokemon.name}
            width={140}
            height={140}
          />
          <h3>{pokemon.name}</h3>
        </div>
      </Link>
    </li>
  );
}
