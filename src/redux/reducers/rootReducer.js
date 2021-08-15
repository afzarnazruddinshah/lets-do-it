import todoReducer from './todoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoList: todoReducer
});

export default rootReducer;