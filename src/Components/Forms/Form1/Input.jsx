import React from 'react';

export function Input(props) {
    return (  
    <div className="form-input">
        <label htmlFor={props.form.inputName}>{props.form.labelName}</label>
        <input type={props.type} name={props.form.inputName} placeholder={props.form.placeholder} value={props.formDetails[props.form.inputName]} onChange={props.handleChange} required></input>
    </div>
    );
}
