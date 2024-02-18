import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap';

import axios from 'axios';
import _ from 'lodash';

const DeleteModal = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) Lifting State
  const {playerSelected,removePlayerFromList, showModal, setShowModal} = props

  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------

  const handleCloseModal = () => {
    setShowModal(false)
  };

  const handleDeletePlayer = () => {
    
    axios.delete('http://localhost:8000/api/players/delete/'+playerSelected._id)
      .then(res => {
        removePlayerFromList(playerSelected._id)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    
    setShowModal(false)
  };

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Delete Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove <span className = "fw-bold">{playerSelected.name}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeletePlayer}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeleteModal
