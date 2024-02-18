import React, {useState, useEffect} from 'react'

import {Link} from "react-router-dom";

import DeleteButton from './DeleteButton'

import axios from 'axios';
import _ from 'lodash';

const AuthorTable = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // ii) React Hooks - States
  const [authorsList, setAuthorsList] = useState([]);
  
  // iii) React Hooks - Effects

  useEffect(()=>{
      getAllAuthors();
  },[])

  //-----------------------------------
  // II) HANDLERS
  // ----------------------------------

  const getAllAuthors = async () => {
    await axios.get('http://localhost:8000/api/authors')
    .then(res=>{  
      setAuthorsList(_.orderBy(res.data,['name'],['asc']));
    }); 
  }

  const removeAuthorFromList = (authorId) => {
    setAuthorsList(authorsList.filter(author => author._id !== authorId));
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    
      <div className ="w-75">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Autor</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          { authorsList.map((author, index) => 
            <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{author.name}</td>
              <td> 
                <Link 
                  className="me-1 btn btn-success btn-sm py-0" 
                  to = {"/edit/"+author._id}>
                  Edit
                </Link> 
                |
                <DeleteButton 
                  author = {author}
                  changeStyle = {false}
                  removeAuthorFromList = {removeAuthorFromList}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  
  )
}

export default AuthorTable
