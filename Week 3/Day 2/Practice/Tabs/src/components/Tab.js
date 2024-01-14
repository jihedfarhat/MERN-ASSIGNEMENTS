import React from 'react'

const tab = (props) => {
    

    const {tab,index,setIndex} = props;
    const {label,content} = tab;


    const tabSelected = (e, index) => {    
        setIndex(index);

    }



    return (
        <>
            <button 
                onClick = { e => tabSelected(e, index) } 
                className="button btn-secondary d-inline-block mx-2 px-2">
                    {label}
            </button>
        </>
    )
}

export default tab