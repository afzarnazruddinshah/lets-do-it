import todoReducer from './todoReducer';
import { combineReducers } from 'redux';
import templatesReducer from './templatesReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    templates: templatesReducer,
    todoList: todoReducer,
    ui: uiReducer
});

export default rootReducer;