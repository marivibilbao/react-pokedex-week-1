import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [error, setError] = useState(false);
  const catchPokemon = () => {
    if (pokemonNameInput === "") {
      setError(true);
    } else {
      setError(false);
      setCaught(caught.concat(pokemonNameInput));
      setpokemonNameInput("");
    }
    //const pokemons = ["Pikachu", "Snover", "Abomasnow", "Cloyster", "Lapras", "Snorlax", "Bulbasur", "Charizard", "Mew", "Mewtwo", "Pidgey","Teddiursa", "Zubat", "Rattata", "Raticate"];
    //const random = Math.floor(Math.random() * pokemons.length);
    //setCaught(caught.concat(pokemons[random]));
    // setCaught(caught.concat(pokemonNameInput));
    // setpokemonNameInput("");
  };
  const [pokemonNameInput, setpokemonNameInput] = useState("");

  const handleInputChange = (event) => {
    setpokemonNameInput(event.target.value);
  };

  const { date } = props;
  //const date = new Date().toLocaleDateString();
  return (
    <>
      <input value={pokemonNameInput} onChange={handleInputChange} />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      {error ? <p>Está vacío por favor escribe el nombre</p> : null}
      <p>
        Caught {caught.length} Pokémon on {date}
      </p>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
