import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

const Container = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 5 }
  });

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemons = data?.pokemons || [];

  return <div className="container">{pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}</div>;
};

export default Container;
