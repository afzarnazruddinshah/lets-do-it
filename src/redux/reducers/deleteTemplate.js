export const deleteTemplateReducer = (state, id) => {
  return state.splice(id, 1);
};
