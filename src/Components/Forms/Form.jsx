import React from 'react';
import { useSelector } from 'react-redux';

import Form1 from "./Form1/Form1";
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';
import Summary from '../Summary/Summary';
import Thanks from './Thanks/Thanks';

function Form() {
    const formNumber = useSelector(state => state.steps.stepNumber);
    return ( 
        <div className="form">
            { formNumber === 1 && (
                <Form1/>
            )}

            { formNumber === 2  && (
                <Form2/>
            )}

            { formNumber === 3  && (
                <Form3/>
            )}

            {formNumber === 4 && (
                <Summary/>
            )}

            {formNumber === 5 && (
                <Thanks/>
            )}
        </div>
     );
}

export default Form;