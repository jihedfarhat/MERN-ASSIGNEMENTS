import React, {useState, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";

import _ from 'lodash';

const SelectionTabs = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // 0) Lifting States and Callbacks
  const {tabs, setTabs, tabSize} = props;
  
  //-----------------------------------
  // I) HANDLERS & AUX FUNCTIONS
  // ----------------------------------

  const handleBoldnessOfLinks = (e) => {
    
    let updatedTabs = [...tabs]
    updatedTabs.map((tab,index) =>
      (e.target.name === "tab_" + _.toString(index)) 
      ? 
      tab.active = true
      :
      tab.active = false
    )
    setTabs(updatedTabs)
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <>
      <p className={tabSize}>
        {tabs.map((tab, index) =>  
        <span key={index} className = "d-inline-block">
          <Link 
            to={tab.path}
            className={(tab.active) ? "mx-1" : "mx-1 fw-light"}
            name = {"tab_"+ index}
            onClick = {handleBoldnessOfLinks}
            key = {index} 
          >  
            {tab.title}
          </Link>
          
          {(index !== (_.size(tabs)-1)) 
            ? 
              <span className="px-1 text-primary fw-light">|</span> 
            : 
            ''
          }
        </span>
        )}
        
      </p> 
    </>
  )
}

export default SelectionTabs
