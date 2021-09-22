import { SAVE_TEMPLATE, LOAD_TEMPLATE } from "./ActionTypes";

export function saveTemplate(template){
    return {
        type: SAVE_TEMPLATE,
        payload: {
            template
        }
    }
}

export function loadTemplate(todoList){
    return {
        type: LOAD_TEMPLATE,
        payload: {
            todoList
        }
    }
}
