import React from "react";

const Logo = (props) => {
  const logWhenClicked = () =>{
    console.log("Cualquier cosa");
  };
  //const welcomeMessage = "Welcome to the Pokedex";
  const {appName} = props;
  //console.log(appName);
  return (
    <header>
      <h1>{appName}</h1>
      <img onClick={logWhenClicked}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokemon"
      />
    </header>
  );
};

export default Logo;