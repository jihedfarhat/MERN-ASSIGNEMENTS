import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {

  const [pokemons, setPokemons] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
      if(sendRequest){
          fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
              .then(response => response.json())
              .then(response => {
                  setPokemons(response.results)
                  
              })
              .catch()
          setSendRequest(false);
      }
  }, [sendRequest]);

  const onClick = (e) => {
      setSendRequest(true)
  }
  
  return (
    <div className="App bg-light p-3 text-left">
      <div className="w-25 mt-2 mx-auto">
        <button className="btn btn-secondary mb-3 d-block" onClick={onClick}>
          {" "}
          Fetch Pokemon
        </button>
        <p className="mb-1">List of Pokemons: </p>
        <ol>
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
