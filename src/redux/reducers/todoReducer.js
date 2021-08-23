import { ADD_ITEM, CLEAR_ALL_ITEMS, REMOVE_ITEM } from '../actions/ActionTypes';
const initState = [];

const todoReducer = (state=initState, action) =>
{
    switch(action.type){
        case ADD_ITEM: return [...state, action.payload.todoItem]; 
        case REMOVE_ITEM: return state.filter((item) => item.itemId !== action.payload.todoItemId);
        case CLEAR_ALL_ITEMS: return [];
        default: return state;
    }
}

export default todoReducer;
