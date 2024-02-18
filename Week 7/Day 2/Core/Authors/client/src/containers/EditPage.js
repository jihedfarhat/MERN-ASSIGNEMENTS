import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";

import axios from 'axios';
import _ from 'lodash';

import AuthorForm from '../components/AuthorForm'

const EditPage = () => {
	
   // i) React Hooks - States
  const [author, setAuthor] = useState({
    name: ''
  });
  const [authorExist, setAuthorExist] = useState(false);

  // ii) React Router Hooks - Params and History
  const params = useParams();

  useEffect(() => {
    
    axios.get('http://localhost:8000/api/authors/' + params.id)
      .then(res => {
        setAuthor(res.data);
        setAuthorExist(true);
      })
      .catch(err => {
        console.log(err)
        setAuthorExist(false);
      })
    
  }, [])
  
  return (

		<main className ="container mt-3">
      
      {authorExist ?
      <>
        <h2> Favorite Authors </h2>
        <Link to="/"> Home</Link>
        <p> Edit this author: </p>
        <AuthorForm
          formType={"update"}
          author = {author}
          setAuthor = {setAuthor}
        />
      </>
      :
      <>
        <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p>
        <Link to="/new"> Add New Author</Link>
      </>
      }

    </main>
	)
}

export default EditPage
