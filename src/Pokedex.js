import React, { useState } from 'react';
import { PokemonType } from './PokemonType';

export function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState(undefined);

  async function getPokemonInfo(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    // Start fetching data from PokeAPI
    // let data = await fetch(url).then(function(response) {
    //   return response.json();
    // });
    // console.log(data);

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    // Update the React state with our Pokemon data
    setSelectedPokemon(data);
  }

  return (
    <div>
      {selectedPokemon && (
        <div>
          {selectedPokemon.species.name}
          {selectedPokemon.types.map((type) => {
            console.log(type);
            return <PokemonType type={type.type.name} />
          })}
        </div>
      )}
      <button onClick={() => getPokemonInfo("squirtle")}>Squirtle</button>
      <button onClick={() => getPokemonInfo("charmander")}>Charmander</button>
      <button onClick={() => getPokemonInfo("bulbasaur")}>Bulbasaur</button>
      <button onClick={() => getPokemonInfo("pidgeot")}>Pidgeot</button>

    </div>
  );
}
