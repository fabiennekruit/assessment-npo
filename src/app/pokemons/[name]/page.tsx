import { TPokemon } from "@/types/Pokemon";
import PokemonDetail from "@/components/pokemon-detail/pokemon-detail";

const Page = ({ params }: { params: TPokemon }) => {
  const currentPokemon = params;

  return (
    <div>
      <h2>{currentPokemon.name}</h2>
      <PokemonDetail params={currentPokemon.name} />
    </div>
  );
};

export default Page;
