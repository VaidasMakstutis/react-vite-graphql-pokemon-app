import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

const Container = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 5 }
  });

  if (loading) return <p className="text-2xl font-bold text-blue-700 text-center m-5">Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  return (
    <div className="container gap-10 m-5 grid grid-cols-3">{pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}</div>
  );
};

export default Container;
