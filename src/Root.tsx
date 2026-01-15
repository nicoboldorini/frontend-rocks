import { useEffect, useState } from "react";
import { PokeAPI } from "./api";

type Pokemon = {
  id: number;
  image: string;
  name: string;
};

type CardProps = {
  image: string;
  name: string;
};

export const Card: React.FC<CardProps> = ({ image, name }) => {
  return (
    <div className="w-60 h-60 bg-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-contain mb-2"
      />
      <h2 className="text-lg font-bold capitalize">{name}</h2>
    </div>
  );
};


export const Root = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons()
      .then(async (response) => {
        const data: Pokemon[] = await Promise.all(
          response.results.map(async (pokemon: any) => {
            const detail = await PokeAPI.getPokemonByName(pokemon.name);
            return {
              id: detail.id,
              image:
                detail.sprites?.other?.["official-artwork"]?.front_default ||
                "",
              name: detail.name,
            };
          })
        );
        setPokemons(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="pt-4 pl-4 flex flex-wrap gap-4">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
        />
      ))}
    </div>
  );
};
