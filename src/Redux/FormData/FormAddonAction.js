import { ADDONS } from "./FormType"

const addon_submit = (formAddonInfo) => {
    return {
        type: ADDONS,
        payload: formAddonInfo
    }
}

export default addon_submit