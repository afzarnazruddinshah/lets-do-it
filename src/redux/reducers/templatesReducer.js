import {
  DELETE_TEMPLATE,
  SAVE_TEMPLATE,
} from "../actions/Template/TemplateActionTypes";
import { deleteTemplateReducer } from "./deleteTemplate";
const initState = [];

const templatesReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case SAVE_TEMPLATE:
      newState = [...state, action.payload.template];
      break;
    case DELETE_TEMPLATE:
      newState.splice(action.payload.deletedTemplateIndex, 1);
      break;
    default:
      newState = state;
  }
  return newState;
};

export default templatesReducer;
