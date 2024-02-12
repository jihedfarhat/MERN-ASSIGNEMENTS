import React from 'react';

const Forms = (props) => {
  const { inputs, setInputs } = props;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-left my-5 p-3 border border-dark">
      <h2>Register Form</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name: </label>
        <input type="text" className="form-control" onChange={onChange} name="firstName" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" className="form-control" onChange={onChange} name="lastName" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input type="email" className="form-control" onChange={onChange} name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input type="password" className="form-control" onChange={onChange} name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" className="form-control" onChange={onChange} name="confirmPassword" />
      </div>
    </div>
  );
};

export default Forms;