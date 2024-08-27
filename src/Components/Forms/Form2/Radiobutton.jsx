import React from 'react';
import { useSelector } from 'react-redux';

export function Radiobutton(props) {
    const planType = useSelector((state)=> state.form.planType);
    const price = (planType==="Monthly") ? `$${props.form.monthlyPrice}/mo` : `$${props.form.annualPrice}/yr`
    return ( 
        <div className="radiobutton-container" >
            <div className="radiobutton-overlay" onClick={props.handleChange} id={props.form.value}></div>
            <div className="radiobutton" id={props.form.value+"-container"}>
                <div className="radiobutton-image">
                    <img src={props.form.img} alt="Random"></img>
                </div>
                <div className="radiobutton-info">
                    <label htmlFor={props.form.inputName} >{props.form.labelName}</label>
                    <div className="planPrice">{price}</div>
                </div>
            </div>
        </div>
     );
}

