import { DECREASE_STEP, INCREASE_STEP, JUMP_STEP } from "./StepType"

const initial_state = {
    stepNumber: 1
}

const stepsReducer = (state=initial_state, action) => {
    switch(action.type){
        case INCREASE_STEP: return {
            ...state,
            stepNumber: state.stepNumber+1
        }
        case DECREASE_STEP: return{
            ...state,
            stepNumber: state.stepNumber-1
        }
        case JUMP_STEP: return {
            ...state,
            stepNumber: 2
        }
        default: return state
    }
}

export default stepsReducer