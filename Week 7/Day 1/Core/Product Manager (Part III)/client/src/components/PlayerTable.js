import React, {useState, useEffect} from 'react'

import DeleteButton from './DeleteButton'
import DeleteModal from './DeleteModal'

import axios from 'axios';
import _ from 'lodash';

const PlayerTable = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // ii) React Hooks - States
  const [playersList, setPlayersList] = useState([]);
  const [playerSelected, setPlayerSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  
  // iii) React Hooks - Effects

  useEffect(()=>{
      getAllPlayers();
  },[])
  

  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------
  

  const getAllPlayers = async () => {
    await axios.get('http://localhost:8000/api/players')
    .then(res=>{  
      setPlayersList(_.orderBy(res.data,['name'],['asc']));
    }); 
  }

  const removePlayerFromList = (playerId) => {
    setPlayersList(playersList.filter(player => player._id !== playerId));
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    
      <div className ="w-75 mt-1 mb-4 bg-white p-3 border border-dark">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col">Prefered Position</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { playersList.map((player, index) => 
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{player.name}</td>
              <td>{ (_.has(player, "position")) ? player.position : ' - ' }</td>
              <td>
                <DeleteButton 
                  player = {player}
                  setPlayerSelected = {setPlayerSelected}
                  removePlayerFromList = {removePlayerFromList}
                  showModal ={showModal}
                  setShowModal = {setShowModal}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <DeleteModal
        playerSelected ={playerSelected}
        removePlayerFromList = {removePlayerFromList}
        showModal = {showModal}
        setShowModal = {setShowModal}
      />

    </div>
  
  )
}

export default PlayerTable
