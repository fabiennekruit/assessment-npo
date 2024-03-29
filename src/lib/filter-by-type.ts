export const filterByType = (pokemonData, typeName) => {
  return pokemonData.filter((pokemon) =>
    pokemon.types.some((type) => type.type.name === typeName)
  );
};
