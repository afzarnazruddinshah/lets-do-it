import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import {
  addItem,
  removeItem,
  completeItem,
  clearAllItems,
} from "./../../redux/actions/todoActions";
import { saveTemplate } from "../../redux/actions/templatesActions";

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
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (todoItem) => dispatch(addItem(todoItem)),
  removeItem: (todoItem) => dispatch(removeItem(todoItem)),
  completeItem: (todoItem) => dispatch(completeItem(todoItem)),
  clearAllItems: () => dispatch(clearAllItems()),
  saveTemplate: (template) => dispatch(saveTemplate(template)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
