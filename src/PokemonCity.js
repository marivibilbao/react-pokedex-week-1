import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div>
      <input type="text" 
      value={city}
      onChange={updateCity}
      placeholder="City"
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
};

export default PokemonCity;
