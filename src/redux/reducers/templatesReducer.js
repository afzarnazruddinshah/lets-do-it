
import { SAVE_TEMPLATE } from '../actions/Template/TemplateActionTypes';
const initState = [];

const templatesReducer = (state=initState, action) =>
{
    switch(action.type){
        case SAVE_TEMPLATE: return [...state, action.payload.template]
        default: return state;
    }
}

export default templatesReducer;
