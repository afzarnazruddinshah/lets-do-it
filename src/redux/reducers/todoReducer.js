import { LOAD_TEMPLATE } from "../actions/Template/TemplateActionTypes";
import {
  ADD_ITEM,
  CLEAR_ALL_ITEMS,
  REMOVE_ITEM,
} from "../actions/Todo/TodoActionTypes";
const initState = [];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload.todoItem];
    case REMOVE_ITEM:
      return state.filter((item) => item.itemId !== action.payload.todoItemId);
    case CLEAR_ALL_ITEMS:
      return [];
    case LOAD_TEMPLATE:
      return [...state, ...action.payload.todoList];
    case "CHANGE_STATUS":
      return state;
    default:
      return state;
  }
};

export default todoReducer;
