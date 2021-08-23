import { SAVE_TEMPLATE } from "./ActionTypes";

export function saveTemplate(template){
    return {
        type: SAVE_TEMPLATE,
        payload: {
            template
        }
    }
}
