import React, { useState } from 'react'

const Persons = (props) => {
  const {firstName, lastName, age, hairColor} = props
  const person = {
    firstName,
    lastName,
    age,
    hairColor
  }
  const [ages, setAges] = useState(person)
  const incriAges = () => {
    setAges({...ages, age: ages.age + 1})
  }
  return (
    <div>
      <h1>{lastName}, {firstName}</h1>
      <p>Age : {JSON.stringify(ages.age)}</p>
      <p>Hair Color : {hairColor}</p>
      <button onClick={incriAges}>Birthday Button for {lastName} {firstName}</button>
    </div>
  )
}

export default Persons