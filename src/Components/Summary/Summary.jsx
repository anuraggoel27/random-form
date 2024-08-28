import React from 'react';
import Buttons from '../Buttons/Buttons';
import { summaryHeader } from './SummaryFields';
import FormHeader from '../FormHeader/FormHeader';
import SummaryPlans from './SummaryPlans';
import "./styles.css"
import SummaryPrice from './SummaryPrice';

function Summary() {
    function handleClick(){
        return true;
    }
    
    return (  
    <div className="form-content">
        <FormHeader title={summaryHeader.title} description={summaryHeader.description} />
        <SummaryPlans />
        <SummaryPrice/>
        {/*<h1> Plan Option: {planOption}</h1>
        <h1> Plan Type: {planType} </h1>
        <h1> Addons :</h1>
        {addons.map((addon, index)=>{
            return (
                <h1 key={index}> {addon} </h1>
            )
        })}*/}
    <Buttons handleClick={handleClick}/>
    </div>);
}

export default Summary;