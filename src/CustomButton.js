import React from 'react'
import './custombutton.scss'
function CustomButton({value,...inputProps}) {
    return (
        
        <button className="custom-button" {...inputProps} style={{border:'none'}}>{value}</button> 
        
    )
}

export default CustomButton
