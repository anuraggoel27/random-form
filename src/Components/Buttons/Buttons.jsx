import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import stepDecreaseAction from '../../Redux/Steps/StepDecreaseAction';
import stepIncreaseAction from '../../Redux/Steps/StepIncreaseAction';
import "./styles.css"
function Buttons(props) {
    const formNumber = useSelector((state)=> state.steps.stepNumber)
    const dispatch = useDispatch();
    function handleNextStep(e){
        e.preventDefault();
        if(props.handleClick()){
            dispatch(stepIncreaseAction());
        }
    }
    
    function handlePrevStep(e){
        e.preventDefault();
        //props.handleClick();
        dispatch(stepDecreaseAction());
    }

    return ( 
        <div className="form-buttons">
            <button className="button button-back" onClick={handlePrevStep} disabled={formNumber===1} > Go Back </button>
            <button className="button button-next" onClick={handleNextStep} > {formNumber === 4 ? "Confirm" : "Next step"}</button>
        </div>
     );
}

export default Buttons;