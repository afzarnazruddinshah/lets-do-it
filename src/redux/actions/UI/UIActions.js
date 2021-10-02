import {
  SIDE_NAVIGATION_BAR_OPEN,
  SIDE_NAVIGATION_BAR_CLOSE,
  UPDATE_APPBAR_TITLE,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from "./UIActionTypes";

export function openSideNavBar() {
  return {
    type: SIDE_NAVIGATION_BAR_OPEN,
  };
}

export function closeSideNavBar() {
  return {
    type: SIDE_NAVIGATION_BAR_CLOSE,
  };
}

export function updateAppBarTitle(title) {
  return {
    type: UPDATE_APPBAR_TITLE,
    payload: {
      title,
    },
  };
}

export function openSnackbar(message) {
  return {
    type: OPEN_SNACKBAR,
    payload: {
      message,
    },
  };
}

export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR,
  };
}
