
import { ADD_ITEM, REMOVE_ITEM } from './../actions/todoActionTypes';
const initState = [];

const todoReducer = (state=initState, action) =>
{
    switch(action.type){
        case ADD_ITEM: return [...state, action.payload.todoItem]; 
        case REMOVE_ITEM: return state.filter((item) => item.itemId !== action.payload.todoItemId);
        default: return state;
    }
}

export default todoReducer;
