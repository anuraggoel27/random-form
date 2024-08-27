import { PLAN_TYPE } from "./FormType"

const plan_type_submit = (formPlanInfo) => {
    return {
        type: PLAN_TYPE,
        payload: formPlanInfo
    }
}


export default plan_type_submit