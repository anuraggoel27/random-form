import React from 'react';
import { useSelector } from 'react-redux';

export function Checkbox(props) {
    const planType = useSelector((state)=> state.form.planType)
    const price = "+$"+((planType === "Monthly")? (props.form.monthlyPrice+"/mo") : (props.form.annualPrice+"/yr")) 
    return ( 
        <div className="checkbox-container" id={props.form.inputName}>
            <div className="checkbox-overlay" id={props.form.inputName} onClick={props.handleChange}></div>
            <div className="checkbox" id={props.form.inputName+"-container"}>
                <input type="checkbox" name={props.form.inputName} value={props.form.value} id={props.form.inputName+"-checkbox"} required></input>
                <label htmlFor={props.form.inputName}>{props.form.labelName}</label>
            </div>
            <div className="addonPrice">{price}</div>
        </div>
     );
}

