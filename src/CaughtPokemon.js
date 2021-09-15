import React from "react";
import { useState } from "react";

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([]);
    const catchPokemon = () => {
        const pokemons = ["Pikachu", "Snover", "Abomasnow", "Cloyster", "Lapras", "Snorlax", "Bulbasur", "Charizard", "Mew", "Mewtwo", "Pidgey","Teddiursa", "Zubat", "Rattata", "Raticate"];
        const random = Math.floor(Math.random() * pokemons.length);
        setCaught(caught.concat(pokemons[random])); 
    };
    const {date} = props;
    //const date = new Date().toLocaleDateString();
    return (
        <>
        <button onClick={catchPokemon}>Catch Pokemon</button>
        <p>Caught {caught.length} Pokémon on {date}</p>
        <ul>
            {caught.map((pokemon, index) => <li key={index}>{pokemon}</li>)}
        </ul>
        </>
    );
};

export default CaughtPokemon;
