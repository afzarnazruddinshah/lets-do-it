import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import templatesReducer from './templatesReducer';

const rootReducer = combineReducers({
    templates: templatesReducer,
    todoList: todoReducer
});

export default rootReducer;