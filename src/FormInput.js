import React from 'react'
import './forminput.scss';
function FormInput({label,...otherProps}) {
    console.log(otherProps.value)
    return (
        <div className="group">
        <input className="form-input"  {...otherProps}/>
        {label?<label className={`${otherProps.value.length?'shrink form-input-label':'form-input-label'}`}>{label}</label>:null}
            
        </div>
    )
}

export default FormInput
