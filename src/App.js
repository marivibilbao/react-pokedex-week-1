import React from "react";
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves.js";
import PokemonMovesSelector from "./PokemonMovesSelector.js";
import PokemonCity from "./PokemonCity.js";

const App = () => {
  const logWhenClicked = () =>{
    console.log("Image was clicked");
  };
  
  const date = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]}/>
      <CaughtPokemon date={date}/>
      <PokemonMovesSelector/>
      {/* <PokemonMoves/> */}
      <PokemonCity/>
    </div>
  );
};

export default App;


//Exercise D se debe borrar
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const Logo = () => {
//   //const welcomeMessage = "Welcome to the Pokedex";
//   const appName = "Pokedex";
//   return(
//   <header>
//     <h1>{appName}</h1>
//     <img
//       src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
//       alt="Pokemon"
//     />
//   </header>
//   );
// };

// const CaughtPokemon = () => {
//   const date = new Date().toLocaleDateString();
//   return(
//     <p>Caught 0 Pokémon on {date}</p>
//   );
// };

// const BestPokemon = () => {
//   const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
//   //const myBestPokemon = ['Squirtle', 'Pikachu', 'Snorlax']
//   return(
//     <div>
//       <p>My favorite Pokémon is Squirtle</p>
//       <ul>
//         {abilities.map((ability,i) => 
//           <li key={i}>{ability}</li>
//         )}
//       </ul>
//     </div>
//     //<p>My favorite Pokémon is {myBestPokemon.join(', ')}</p>
//   );
// };
