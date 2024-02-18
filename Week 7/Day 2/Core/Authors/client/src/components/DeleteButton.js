import React from 'react'

import axios from 'axios';
import _ from 'lodash';


const DeleteButton = (props) => {

    //-----------------------------------
    // I) HOOKS & VARIABLES
    // ----------------------------------

    // i) Lifting States and Callbacks
    const {author, changeStyle, removeAuthorFromList} = props;
   
    //-----------------------------------
    // II) HANDLERS
    // ----------------------------------

    const deleteAuthor = (authorID) =>{
       
        axios.delete('http://localhost:8000/api/authors/delete/' + authorID)
            .then(res => {
                removeAuthorFromList(authorID)
                console.log(res)
            })
            .catch(err => {
                console.log(err)

            })
    }

    return (
        <>  
            {(!changeStyle) 
            ?
            <button 
                className="mx-1 btn btn-outline-danger btn-sm py-0" 
                onClick = {(e) => deleteAuthor(author._id)}
            >
                Delete
            </button>
            :
             <button 
                className="mx-2 btn btn-outline-danger" 
                onClick = {(e) => deleteAuthor(author._id)}
            >
             Delete
            </button>
            }
        </>
    )
}

export default DeleteButton