import PropTypes from "prop-types";

const Pokemon = ({ pokemon }) => {
  return (
    <div className="border-solid border-2 border-gray-300 rounded-md">
      <div className="bg-yellow-500 text-xl font-bold text-white text-center uppercase rounded-md py-2">
        <p>{pokemon.name}</p>
      </div>
      <div className="grid grid-cols-2 gap-10 m-3">
        <span className="bg-green-500 text-md font-normal text-white text-center rounded-md py-1">maxHP: {pokemon.maxHP}</span>
        <span className="bg-green-500 text-md font-normal text-white text-center rounded-md py-1">maxCP: {pokemon.maxCP}</span>
      </div>
      <div className="flex justify-center items-center p-5">
        <img className="size-48" src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
      </div>
      <div className="grid gap-1 grid-cols-3 p-1">
        {pokemon.attacks.special.slice(0, 3).map(attack => (
          <span className="bg-red-500 text-sm font-normal text-white text-center rounded-md m-1 p-1" key={`${attack.name}-${attack.damage}`}>
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
