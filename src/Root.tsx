import { Link } from "react-router";

const cardStyle =
  "bg-green-500 w-40 h-48 text-center flex flex-col items-center justify-center";

const PokemonCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className={cardStyle}>
      <img src={image} alt={name} className="w-30 h-30 mb-2" />
      <strong className="text-white">{name}</strong>
    </div>
  );
}; 

export const Root = () => {
  const pokemons = [
    { name: "Pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  ];

  return (
    <div className="space-x-2 flex flex-wrap justify-center">
      {pokemons.map((Pokemon) => (
        <PokemonCard key={Pokemon.name} name={Pokemon.name} image={Pokemon.image} />
      ))}
    </div>
  );
};
