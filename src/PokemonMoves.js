import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then((res) => res.json())
      .then((pokemonData) => {
        console.log(pokemonData);
        setPokemonData(pokemonData);
      });
  }, []);

  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
        <p>{pokemonData.name}'s abilities:</p>
        <ul>
          {pokemonData.abilities.map((ability, index) => {
            return <li key={index}>{ability.ability.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default PokemonMoves;
