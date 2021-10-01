import { ADD_ITEM, CLEAR_ALL_ITEMS, COMPLETE_ITEM, REMOVE_ITEM } from "./TodoActionTypes"
import { DONE } from './../../../common/constants';

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

export function clearAllItems(){
    return {
        type: CLEAR_ALL_ITEMS,
        payload: {}
    }
}
