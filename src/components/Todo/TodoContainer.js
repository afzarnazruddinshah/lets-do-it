import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import {
  addItem,
  removeItem,
  completeItem,
  clearAllItems,
} from "./../../redux/actions/todoActions";
import { loadTemplate, saveTemplate } from "../../redux/actions/templatesActions";

const TodoContainer = (props) => {
  return (
    <>
      <Todo {...props} />
    </>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  date: new Date().toDateString(),
  templates: state.templates
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (todoItem) => dispatch(addItem(todoItem)),
  removeItem: (todoItem) => dispatch(removeItem(todoItem)),
  completeItem: (todoItem) => dispatch(completeItem(todoItem)),
  clearAllItems: () => dispatch(clearAllItems()),
  saveTemplate: (template) => dispatch(saveTemplate(template)),
  loadTemplate: (todoList) => dispatch(loadTemplate(todoList))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
