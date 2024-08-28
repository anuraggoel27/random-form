import React from 'react';
import { useSelector } from 'react-redux';

import Form1 from "./Form1/Form1";
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';
import Summary from '../Summary/Summary';
import Thanks from './Thanks/Thanks';

function Form() {
    const formNumber = useSelector(state => state.steps.stepNumber);
    const components= {
        1: Form1,
        2: Form2,
        3: Form3,
        4: Summary,
        5: Thanks
    };
    const ComponentToRender = components[formNumber] || null;
    return ( 
        <div className="form">
            <ComponentToRender/>
        </div>
     );
}

export default Form;