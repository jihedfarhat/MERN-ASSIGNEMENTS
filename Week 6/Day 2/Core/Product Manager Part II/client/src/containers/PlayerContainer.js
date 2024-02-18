import React,{useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

import PlayerForm from '../components/PlayerForm'
import PlayerTable from '../components/PlayerTable'
import SelectionTabs from '../components/SelectionTabs'

import _ from 'lodash';

const PlayerContainer = () => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) React Hooks - States
  const [tabs, setTabs] = useState([
    {
      type: 'player_list',
      title: 'List',
      path: '/players/list',
      active: true
    },
    { 
      type: 'add_player',
      title: 'Add Player',
      path: '/players/addplayer',
      active: false
    },
  ]);

  // ii) React Router Hooks - Locations
  const location = useLocation();

  // iii) React Hooks - Effects
  useEffect(() => {
    let pathname = location.pathname
    if(_.includes(pathname,'list'))
      setTabs([
        {...tabs[0], active: true},
        {...tabs[1], active: false}
      ]);
    else{
      setTabs([
        {...tabs[0], active: false},
        {...tabs[1], active: true}
      ]);
    }
  }, [])

  //-----------------------------------
  // II) JSX
  // ----------------------------------

  return (
    <div className = "my-4 px-5 py-4 border bg-white">
     
      <SelectionTabs
        tabs = {tabs}
        setTabs = {setTabs}
        tabSize = "h3"
      />

      <div className= "mt-4">
        { (tabs[0].active)
          ?
            <PlayerTable/>
          :
            <PlayerForm
              tabs = {tabs}
              setTabs = {setTabs}
            />
        }
      </div>
    </div>
  )
}

export default PlayerContainer
