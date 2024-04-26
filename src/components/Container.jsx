import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

const Container = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 7 }
  });

  if (loading) return <p className="text-2xl font-semibold text-blue-600 text-center m-5">Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  return (
    <div className="container grid gap-2 sm:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 m-3">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
};

export default Container;
