import React from "react";

const BestPokemon = (props) => {
  //const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  //const myBestPokemon = ['Squirtle', 'Pikachu', 'Snorlax']
  const{abilities} = props;
  return (
    <div>
      <p>My favorite Pokémon is Squirtle</p>
      <ul>
        {abilities.map((ability, i) => (
          <li key={i}>{ability}</li>
        ))}
      </ul>
    </div>
    //<p>My favorite Pokémon is {myBestPokemon.join(', ')}</p>
  );
};

export default BestPokemon;
