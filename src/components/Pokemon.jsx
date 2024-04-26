import PropTypes from "prop-types";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon border-solid rounded-md border-2 border-gray-300">
      <div className="pokemon__name bg-yellow-400 rounded-md font-bold text-center text-xl text-white uppercase py-2">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta grid grid-cols-2 gap-10 m-3">
        <span className="text-white text-center font-bold bg-green-400 rounded-md py-1">maxHP: {pokemon.maxHP}</span>
        <span className="text-white text-center font-bold bg-green-400 rounded-md py-1">maxCP: {pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image flex justify-center items-center p-5">
        <img className="size-48" src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
      </div>
      <div className="pokemon__attacks grid grid-cols-3 py-2">
        {pokemon.attacks.special.slice(0, 3).map(attack => (
          <span className="bg-red-500 font-bold text-center text-white m-2 p-1 rounded-md" key={`${attack.name}-${attack.damage}`}>
            {attack.name}
          </span>
        ))}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object
};

export default Pokemon;
