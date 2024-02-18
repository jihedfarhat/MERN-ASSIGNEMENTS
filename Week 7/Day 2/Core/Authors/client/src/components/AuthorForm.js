import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

const AuthorForm = (props) => {

  //-----------------------------------
  // I) HOOKS & VARIABLES
  // ----------------------------------

  // i) Lifting States
  const {formType, author, setAuthor} = props;

  // ii) React Hooks - States
  
  const [errorMessages, setErrorMessages] = useState({
    name: ''
  });

   // iii) React Router Hooks - Params and History
   const params = useParams();
   const history = useHistory();

   // v) React Hooks - Effetcs

  useEffect(() => {
    console.log(formType)
    if(formType === "update") {
      axios.get('http://localhost:8000/api/authors/' + params.id)
        .then(res => {
          setAuthor(res.data);
        })
    }
  }, [])
 

  //-----------------------------------
  // II) API CALLS AND HANDLERS
  // ----------------------------------

  // i) API Calls
  const createAuthor = async (author) => {
    await axios.post('http://localhost:8000/api/authors/new', author)
      .then(res=>{
        console.log("Response: ", res)
        history.push("/")
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

  const updateAuthor = async (author) => {
    axios.put('http://localhost:8000/api/authors/edit/'+params.id, author)
    .then(res=> {
      console.log("Response: ", res)
      history.push("/")
    })
    .catch(err=>console.log("Error: ", err)) 
  }

  // ii) Handlers
  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setAuthor({
      ...author,
      [e.target.name]: e.target.value
    });
  };
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(formType === "create"){
      createAuthor(author)
      setAuthor({
        name:''
      })
    }
    else if (formType === "update"){
      updateAuthor(author)
    }
  }

  //-----------------------------------
  // III) JSX
  // ----------------------------------

  return (
    <div className="mt-3 w-50 bg-light py-3">
        <form onSubmit={onSubmitHandler}>
          
          <div className="row mb-3 justify-content-center">
            <label 
              htmlFor="name" 
              className="col-2 col-form-label text-left"
            >
              Name: 
            </label> 
            <div className="col-8">
              <input 
                type="text" 
                className="form-control" 
                id = "name" 
                name="name" 
                value={author.name}
                onChange={ onChangeHandler }
              />
              {(_.has(errorMessages, 'name')) &&
                <div className = "text-danger small">{errorMessages.name}</div>
              }
            </div>
          </div>
          <div className="row justify-content-center">
            <div className = "col-4">
              <Link 
                to="/"
                className="btn btn-outline-dark mx-1"
              > 
                Cancel 
              </Link>
              <input 
                className="btn btn-success mx-1"
                type="submit" 
                value={(formType === "create") ? "Add" : "Edit"} 
              />
              
            </div>
          </div>
        </form>
      </div>
  )
}

export default AuthorForm
