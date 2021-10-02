import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  SIDE_NAVIGATION_BAR_CLOSE,
  SIDE_NAVIGATION_BAR_OPEN,
  UPDATE_APPBAR_TITLE,
} from "../actions/UI/UIActionTypes";
const initState = {
  isSideNavBarOpen: false,
  title: "Todo List",
  isSnackbarOpen: false,
  snackbarMessage: "",
};

const uiReducer = (state = initState, action) => {
  let newState = state;
  switch (action.type) {
    case SIDE_NAVIGATION_BAR_OPEN:
      newState = { ...state, isSideNavBarOpen: true };
      break;
    case SIDE_NAVIGATION_BAR_CLOSE:
      newState = { ...state, isSideNavBarOpen: false };
      break;
    case UPDATE_APPBAR_TITLE:
      newState = { ...state, title: action.payload.title };
      break;
    case OPEN_SNACKBAR:
      newState = {
        ...state,
        isSnackbarOpen: true,
        snackbarMessage: action.payload.message,
      };
      break;
    case CLOSE_SNACKBAR:
      newState = {
        ...state,
        isSnackbarOpen: false,
        snackbarMessage: "",
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default uiReducer;
