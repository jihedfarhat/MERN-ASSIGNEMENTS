import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [pokemons, setPokemons] = useState({});
  const [sendRequest, setSendRequest] = useState(false);

  useEffect(() => {
    if (sendRequest) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=1050")
        .then((response) => {
          setPokemons(response.data.results);
        })
        .catch();
      setSendRequest(false);
    }
  }, [sendRequest]);

  const onClick = (e) => {
    setSendRequest(true);
  };

  return (
    <div className="App bg-light p-3 text-left">
      <div className="w-25 mt-2 mx-auto">
        <button className="btn btn-secondary mb-3 d-block" onClick={onClick}>
          {" "}
          Fetch Pokemon
        </button>
        <p className="mb-1">List of Pokemons: </p>
        <ul>
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
