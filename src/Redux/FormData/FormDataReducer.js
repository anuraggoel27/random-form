import { PERSONAL_INFO, PLAN_TYPE, ADDONS, PLAN_OPTION, AMOUNT, TOTAL_AMOUNT } from "./FormType"
const initial_state = {
        personal_info: {
            name: "",
            email: "",
            phoneNumber: ""
        },
        planOption: {
            name: "",
            monthlyPrice: 0,
            annualPrice: 0
        },
        planType: "Monthly",
        addons:[],
        total_amount: 0
}

const formReducer = (state = initial_state, action) =>{
    switch(action.type){
        case PERSONAL_INFO: return {
            ...state, 
            personal_info: action.payload
        }
        case PLAN_OPTION: return{
            ...state,
            planOption: action.payload
        }
        case PLAN_TYPE: return{
            ...state,
            planType: action.payload 
        }
        case ADDONS: return{
            ...state,
            addons: action.payload
        }
        case TOTAL_AMOUNT: return{
            ...state,
            total_amount: state.total_amount+action.payload
        }
        default: return state
    }
}

export default formReducer