import React, {useState} from 'react'
import { Link } from "react-router-dom";

import AuthorForm from '../components/AuthorForm'

const AddPage = () => {

  // i) React Hooks - States
  const [author, setAuthor] = useState({
    name: ''
  });

  return (
    <main className ="container mt-3">
      
      <h2> Favorite Authors </h2>
      <Link to="/"> Home</Link>
      <p> Add a new author: </p>
      <AuthorForm
        formType={"create"}
        author={author}
        setAuthor={setAuthor}
      />

    </main>
  )
}

export default AddPage
