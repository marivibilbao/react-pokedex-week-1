import React from "react";

const CaughtPokemon = (props) => {
    const {date} = props;
    //const date = new Date().toLocaleDateString();
    return <p>Caught 0 Pokémon on {date}</p>;
};

export default CaughtPokemon;
