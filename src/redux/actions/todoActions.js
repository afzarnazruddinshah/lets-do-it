import { DONE } from "../../components/Todo/Todo"
import { ADD_ITEM, COMPLETE_ITEM, REMOVE_ITEM } from "./todoActionTypes"

export function addItem(todoItem)
{
    return {
        type: ADD_ITEM,
        payload: {
            todoItem: todoItem
        }
    }
}

export function removeItem(todoItemId)
{
    return {
        type: REMOVE_ITEM,
        payload: {
            todoItemId
        }
    }
}

export function completeItem(todoItem)
{
    return {
        type: COMPLETE_ITEM,
        payload: {
            todoItem: {...todoItem, itemStatus: DONE}
        }
    }
}
