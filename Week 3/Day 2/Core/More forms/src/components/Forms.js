import React, { useState } from "react";

const Forms = (props) => {
  const { inputs, setInputs } = props;

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleErrors = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    if (e.target.name == "firstName" || e.target.name == "lastName") {
      if (e.target.value.length < 2 && e.target.value.length != 0) {
        setErrors({
          ...errors,
          [e.target.name]: "Field must be 2 characters or longer ",
        });
      } else {
        setErrors({ ...errors, [e.target.name]: "" });
      }
    }
    if (e.target.name == "email") {
      if (e.target.value.length < 5 && e.target.value.length != 0) {
        setErrors({
          ...errors,
          [e.target.name]: "Field must be 5 characters or longer ",
        });
      } else {
        setErrors({ ...errors, [e.target.name]: "" });
      }
    }
    if (e.target.name == "password" || e.target.name == "confirmPassword") {
      if (e.target.value.length < 8 && e.target.value.length != 0) {
        setErrors({
          ...errors,
          [e.target.name]: "Field must be 8 characters or longer",
        });
      } else {
        setErrors({ ...errors, [e.target.name]: "" });
      }
    }
  };
  return (
    <div className="text-left my-5 p-3 border border-dark">
      <h2>Register Form</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          className="form-control"
          onChange={handleErrors}
          name="firstName"
        />
        {errors.firstName ? (
          <p className="text-danger small"> {errors.firstName}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          className="form-control"
          onChange={handleErrors}
          name="lastName"
        />
        {errors.lastName ? (
          <p className="text-danger small"> {errors.lastName}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          className="form-control"
          onChange={handleErrors}
          name="email"
        />
        {errors.email ? (
          <p className="text-danger small"> {errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          className="form-control"
          onChange={handleErrors}
          name="password"
        />
        {errors.password ? (
          <p className="text-danger small"> {errors.password}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          className="form-control"
          onChange={handleErrors}
          name="confirmPassword"
        />
        {errors.confirmPassword ? (
          <p className="text-danger small"> {errors.confirmPassword}</p>
        ) : (
          ""
        )}
      </div>
      <div>
        {inputs.password != inputs.confirmPassword ? (
          <p className="text-danger small">
            {" "}
            Password and Confirm Password must be the same
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Forms;
