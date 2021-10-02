import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import {
  addItem,
  removeItem,
  completeItem,
  clearAllItems,
} from "./../../redux/actions/Todo/TodoActions";
import {
  loadTemplate,
  saveTemplate,
} from "../../redux/actions/Template/TemplateActions";
import {
  closeSideNavBar,
  openSideNavBar,
  openSnackbar,
  updateAppBarTitle,
} from "../../redux/actions/UI/UIActions";

const TodoContainer = (props) => {
  const { updateAppBarTitle } = props;
  React.useEffect(() => {
    updateAppBarTitle("Todo List");
  }, []);

  return (
    <>
      <Todo {...props} />
    </>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
  date: new Date().toDateString(),
  templates: state.templates,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (todoItem) => dispatch(addItem(todoItem)),
  removeItem: (todoItem) => dispatch(removeItem(todoItem)),
  completeItem: (todoItem) => dispatch(completeItem(todoItem)),
  clearAllItems: () => dispatch(clearAllItems()),
  saveTemplate: (template) => dispatch(saveTemplate(template)),
  loadTemplate: (todoList) => dispatch(loadTemplate(todoList)),
  openSideNavBar: () => dispatch(openSideNavBar()),
  closeSideNavBar: () => dispatch(closeSideNavBar()),
  updateAppBarTitle: (title) => dispatch(updateAppBarTitle(title)),
  openSnackbar: (message) => dispatch(openSnackbar(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
