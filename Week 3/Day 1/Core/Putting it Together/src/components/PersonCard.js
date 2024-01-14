import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        const {firstName, lastName, age, hairColor} = props;
        this.state = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            hairColor: hairColor
        }
    }

    increaseAge = () =>{
        this.setState({ age: this.state.age + 1 });
        console.log("Increasing Age!")
    }

    render() {
        return (
        <div className="m-3 p-3 bg-light border b-dark"> 
            <div>
                <h1> {this.state.lastName}, {this.state.firstName} </h1>
                <p> Age: {this.state.age} </p>
                <p> Hair Color: {this.state.hairColor} </p>
                <button type="button" className= "btn btn-success " onClick= {this.increaseAge}> Birthday Button for { this.state.firstName} {this.state.lastName} </button>
            </div>
        </div>
        
        );
    }
}
    
export default PersonCard;