import {
  SAVE_TEMPLATE,
  LOAD_TEMPLATE,
  DELETE_TEMPLATE,
} from "./TemplateActionTypes";

export function saveTemplate(template) {
  return {
    type: SAVE_TEMPLATE,
    payload: {
      template,
    },
  };
}

export function loadTemplate(todoList) {
  return {
    type: LOAD_TEMPLATE,
    payload: {
      todoList,
    },
  };
}

export function deleteTemplate(index) {
  return {
    type: DELETE_TEMPLATE,
    payload: {
      deletedTemplateIndex: index,
    },
  };
}
