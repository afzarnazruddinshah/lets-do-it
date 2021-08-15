import React from "react";
import TodoContainer from './components/Todo/TodoContainer';

export const RESTART = "RESTART";
export const PREV = "PREV";
export const NEXT = "NEXT";
function Slides(props) {

  return (
   <TodoContainer />
  );
}

Slides.defaultProps = {
};

export default Slides;
