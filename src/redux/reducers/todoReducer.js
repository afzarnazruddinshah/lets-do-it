import { ADD_ITEM, CLEAR_ALL_ITEMS, LOAD_TEMPLATE, REMOVE_ITEM } from '../actions/ActionTypes';
const initState = [];

const todoReducer = (state=initState, action) =>
{
    switch(action.type){
        case ADD_ITEM: return [...state, action.payload.todoItem]; 
        case REMOVE_ITEM: return state.filter((item) => item.itemId !== action.payload.todoItemId);
        case CLEAR_ALL_ITEMS: return [];
        case LOAD_TEMPLATE: return action.payload.todoList
        default: return state;
    }
}

export default todoReducer;
