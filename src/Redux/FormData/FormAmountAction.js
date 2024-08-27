import { TOTAL_AMOUNT } from "./FormType"

const calculate_amount = (price) => {
    return {
        type: TOTAL_AMOUNT,
        payload: price
    }
}

export default calculate_amount