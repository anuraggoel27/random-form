import { PERSONAL_INFO } from "./FormType"

const personal_info_submit = (formPersonalData) => {
    return{
        type: PERSONAL_INFO,
        payload: formPersonalData
    }
}

export default personal_info_submit;