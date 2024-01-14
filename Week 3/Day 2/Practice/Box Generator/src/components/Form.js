import React, {useState} from 'react'

const Form = (props) => {

    const {inputs, setInputs} = props;

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");

    const colorHandler = (e) => {
        setColor(e.target.value);
        
    };
    const heightHandler = (e) => {
        setHeight(e.target.value);
    };

    const formHandler = (e) => {
        e.preventDefault();
        setInputs([...inputs, {
                "color": color, 
                "height": height,
                "style": {
                    "display": "inline-block",
                    "background": color,
                    "height": `${height}px`,
                    "width": `${height}px`
                }
            }]);
        
        setColor("");
        setHeight("");
    }

    return (
        <div>
            <form onSubmit = { formHandler }>
                <h2>Box Form</h2>
                <div className="form-group">
                    <label htmlFor="color">Color: </label> 
                    <input type="text" className="form-control" onChange={ colorHandler } name="color" value={color}/>
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height: </label> 
                    <input type="text" className="form-control" onChange={ heightHandler } name="height" value={height}/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form