import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

const PlayerForm = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) // i) Lifting States
  const {tabs, setTabs} = props;

  // ii) React Hooks - States
  const [player, setPlayer] = useState({
    name: '',
    position:'',
    gameStatus:{
        gameOne: 'undecided',
        gameTwo: 'undecided',
        gameThree: 'undecided'
    }
  });
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    position:''
  });

   // iii) React Router Hooks - Params and History
   const params = useParams();
   const history = useHistory();

   // v) React Hooks - Effetcs

  useEffect(() => {
    
  }, [])
 

  //-----------------------------------
  // II) API CALLS AND HANDLERS
  // ----------------------------------

  // i) API Calls
  const createPlayer = async (player) => {
    
    if(player.position === '')
      player.position = '-'
    await axios.post('http://localhost:8000/api/players/new', player)
      .then(res=>{
        console.log("Response: ", res)
        handleCancelOrFinishOperation()
      })
      .catch(err=>{
        console.log("Error: ", err)
        let errors = err.response.data.errors;
        _.keys(errors).map((errorType, index) => 
          setErrorMessages({
            ...errorMessages,
            [errorType]: errors[errorType].message
          })
        )
      
      })
  }

  // ii) Handlers
  const handleChangePlayerFields = (e) => {
    console.log(e.target.value)
    setPlayer({
      ...player,
      [e.target.name]: e.target.value
    });
  };

  const handleCancelOrFinishOperation = (e) => {
    let updatedTabs = [...tabs]
    updatedTabs.map((tab,index) =>
      tab.active = !tab.active)

    setTabs(updatedTabs)
  };
  
  const handleAddNewPlayer = (e) => {
    e.preventDefault();
    createPlayer(player)
    setPlayer({
      name: '',
      position:'',
      gameStatus:{
        gameOne: 'undefined',
        gameTwo: 'undefined',
        gameThree: 'undefined'
      }
    }) 
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <div className="w-75 mt-3 mb-5 p-3 bg-light border border-dark">
        <form onSubmit={handleAddNewPlayer}>
          
          <div className="row mb-3 justify-content-center">
            <label 
              htmlFor="name" 
              className="col-3 col-form-label text-end"
            >
              Player Name: 
            </label> 
            <div className="col-8">
              <input 
                type="text" 
                className="form-control" 
                id = "name" 
                name="name" 
                value={player.name}
                onChange={ handleChangePlayerFields }
              />
              {(_.has(errorMessages, 'name')) &&
                <div className = "text-danger small">{errorMessages.name}</div>
              }
            </div>
          </div>

          <div className="row mb-3 justify-content-center">
            <label 
              htmlFor="name" 
              className="col-3 col-form-label text-end"
            >
              Prefered Position: 
            </label> 
            <div className="col-8">
              <input 
                type="text" 
                className="form-control" 
                id = "position" 
                name="position" 
                value={player.position}
                onChange={ handleChangePlayerFields }
              />
              {(_.has(errorMessages, 'name')) &&
                <div className = "text-danger small">{errorMessages.position}</div>
              }
            </div>
          </div>

          <div className="row justify-content-end mt-4">
            <div className = "col-4 text-end me-4">
              <button 
                className="mx-1 btn btn-outline-dark btn-lg py-0"
                type="button"  
                onClick = {handleCancelOrFinishOperation}
              >
                Cancel
              </button>
              <button 
                className="mx-1 btn btn-success btn-lg py-0"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default PlayerForm
