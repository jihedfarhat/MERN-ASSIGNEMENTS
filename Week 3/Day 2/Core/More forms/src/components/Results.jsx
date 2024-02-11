import React from 'react';

const Results = (props) => {
  const { firstName, lastName, email, password, confirmPassword } = props.data;
  return (
    <div className="text-left my-5 p-3 border border-dark">
        <h2>Results</h2>
          <ul>
            <li> First Name: {firstName}</li>
            <li> Last Name: {lastName}</li>
            <li> Email: {email}</li>
            <li> Password: {password}</li>
            <li> Confirm Password: {confirmPassword}</li>
          </ul>
      </div>
  )
}

export default Results