import React from 'react'

import axios from 'axios';
import _ from 'lodash';

const DeleteButton = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) Lifting States and Callbacks
  const {player, setPlayerSelected, setShowModal} = props;
  
  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------

  const handleShowModal = () => {
    setShowModal(true)
    setPlayerSelected(player)
  };

  return (
    <>
      <button 
        className="mx-1 btn btn-outline-danger py-0"
        onClick={handleShowModal}
      >
        Delete
      </button>
    </>
  )
}

export default DeleteButton