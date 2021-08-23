import React, { Component } from "react";
import TodoContainer from "./components/Todo/TodoContainer";

export const RESTART = "RESTART";
export const PREV = "PREV";
export const NEXT = "NEXT";
class Parent extends Component {
  render() {
    return (
      <>
        <TodoContainer />
      </>
    );
  }
}

export default Parent;
