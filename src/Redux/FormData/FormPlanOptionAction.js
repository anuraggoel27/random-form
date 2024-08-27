import { PLAN_OPTION } from "./FormType"

const plan_option_submit = (formPlanInfo) => {
    return {
        type: PLAN_OPTION,
        payload: formPlanInfo
    }
}


export default plan_option_submit