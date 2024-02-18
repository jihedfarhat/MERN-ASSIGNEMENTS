import React, {useState, useEffect} from 'react'

import {Link, useLocation, useHistory} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

const PlayerStatus = (props) => {

	//-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

	// ii) Lifting States
  const {gameNumber, setGameNumber} = props;

  // ii) React Hooks - States
  const [playersList, setPlayersList] = useState([]);
	
  // iii) React Hooks - Effects
  useEffect(()=>{
      getAllPlayers();
  },[])

  //-----------------------------------
  // II) HANDLERS & API CALLS
  // ----------------------------------

	// i) API Calls
  const getAllPlayers = async () => {
    await axios.get('http://localhost:8000/api/players')
    .then(res=>{  
      setPlayersList(_.orderBy(res.data,['name'],['asc']));
    }); 
  }

	const updatePlayer = async (player) => {
    await axios.put('http://localhost:8000/api/players/edit/'+player._id, player)
    .then(res=>console.log("Response: ", res))
    .catch(err=>console.log("Error: ", err)) 
  }

	// ii) Handlers
	const handleChangeGameStatus = (e) => {
		let updatedPlayers = [...playersList]
		let index = e.target.value
		let statusType = e.target.name
		console.log(updatedPlayers[index].gameStatus[gameNumber] = statusType)
		updatePlayer(updatedPlayers[index])
		setPlayersList(updatedPlayers)
	}

	return (
		<div className ="w-75 mt-1 mb-4 bg-white p-3 border border-dark mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col" className = "text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          { playersList.map((player, index) => 
            <tr key={index} className = "align-middle">
              <th scope="row">{index+1}</th>
              <td>{player.name}</td>
              <td className = "text-center">
								<button 
									className=
									{(player.gameStatus[gameNumber] === "playing" )
										 ? "mx-1 btn btn-success py-0" 
										 : "mx-1 btn btn-outline-dark py-0"
									}
									type="button"
									name = "playing"
									value = {index}  
									onClick = {handleChangeGameStatus}
								>
									Playing
								</button>
								<button 
									className=
									{(player.gameStatus[gameNumber] === "not_playing" )
										 ? "mx-1 btn btn-danger py-0" 
										 : "mx-1 btn btn-outline-dark py-0"
									}
									type="button"
									name = "not_playing"
									value = {index}  
									onClick = {handleChangeGameStatus}
								>
									Not Playing
								</button>
								<button 
									className=
										{(player.gameStatus[gameNumber] === "undecided" )
										 	? "mx-1 btn btn-warning py-0" 
										 	: "mx-1 btn btn-outline-dark py-0"
										}
									type="button"
									name = "undecided"
									value = {index}  
									onClick = {handleChangeGameStatus}
								>
									Undecided
								</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
		</div>
	)
}

export default PlayerStatus
