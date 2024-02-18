import React, {useState, useEffect} from 'react'

import {Link, useLocation, useHistory} from "react-router-dom";

import PlayerStatus from '../components/PlayerStatus'
import SelectionTabs from '../components/SelectionTabs'

import _ from 'lodash';

const StatusContainer = () => {

  // i) React Hooks - States
  const [tabs, setTabs] = useState([
    {
      type: 'game_1',
      title: 'Game 1',
      path: '/status/game/1',
      active: true
    },
    { 
      type: 'game_2',
      title: 'Game 2',
      path: '/status/game/2',
      active: false
    },
    { 
      type: 'game_3',
      title: 'Game 3',
      path: '/status/game/3',
      active: false
    }
  ]);
  const [gameNumber, setGameNumber] = useState('');
  const [gameIndex, setGameIndex] = useState('');
  const [firstRender, setFirstRender] = useState(true);

  // ii) React Router Hooks - Locations
  const location = useLocation();
	const history = useHistory();

	// iii) React Hooks - Effects
  useEffect(() => {
    let updatedTabs = [...tabs]
    let pathname = location.pathname
		let pathIndex = _.toNumber(pathname.slice(pathname.lastIndexOf('/') + 1));
		
    updatedTabs.map((tab,index) =>
      (pathIndex-1 === index) 
      ? 
      tab.active = true
      :
      tab.active = false
    )
    setTabs(updatedTabs)

    if(pathIndex === 1) {
			setGameNumber('gameOne')
      setGameIndex('1')
    }
    else if(pathIndex === 2) {
      setGameNumber('gameTwo')
      setGameIndex('2')
    }
		else if(pathIndex === 3) {
			setGameNumber('gameThree')
      setGameIndex('3')
    }
		else {
			history.push("/status/game/1")
    }
  }, [location])

  

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <div className = "mt-4 px-4 py-2 border bg-white">
      
      <h1 className ="p-3"> Player Status - Game {gameIndex}</h1>
       
      <div className = "text-center mt-1">
        <SelectionTabs
          tabs = {tabs}
          setTabs = {setTabs}
          tabSize = "h4"
        />
      </div>
    
      <div className = "mt-4">
        <PlayerStatus
          gameNumber = {gameNumber}
          setGameNumber = {setGameNumber}
        />
      </div>
      
    </div>
  )
}

export default StatusContainer