import React, { useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((serverResponse) => {
        return serverResponse.json();
      })
      .then((actualServerResponse) => {
        console.log(actualServerResponse.results);
        setPokemon(actualServerResponse.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h1>Pokemon 🃏</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {/* <div>{JSON.stringify(pokemon)}</div> */}
      <div>
        {pokemon.map((poke) => {
          return (
            <ul>
              <li>{poke.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
