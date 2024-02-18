import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

import SelectionTabs from '../components/SelectionTabs'

import _ from 'lodash';

const MainContainer = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) React Hooks - States

  const [tabs, setTabs] = useState([
    {
      type: 'player',
      title: 'Manage Players',
      path: '/players/list',
      active: true
    },
    { 
      type: 'status',
      title: 'Manage Player Status',
      path: '/status/game/1',
      active: false
    },
  ]);
  
  // ii) React Router Hooks - Locations
  const location = useLocation();

  // iii) React Hooks - Effects
  useEffect(() => {
    let pathname = location.pathname
    if(_.includes(pathname,'player'))
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
    <main className ="container">
      
      <SelectionTabs
        tabs = {tabs}
        setTabs = {setTabs}
        tabSize = "h2"
      />
      
      <div>
        {props.children}
      </div>
      
    </main>
  )
}

export default MainContainer