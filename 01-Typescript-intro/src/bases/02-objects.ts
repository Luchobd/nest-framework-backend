export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const pokemon: Pokemon = {
  id: 1,
  name: "Bulbasur",
  age: 12,
};

export const pokemons: Pokemon[] = [];

pokemons.push(pokemon);

console.log(pokemons);
