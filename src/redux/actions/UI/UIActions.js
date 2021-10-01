import {
  SIDE_NAVIGATION_BAR_OPEN,
  SIDE_NAVIGATION_BAR_CLOSE,
  UPDATE_APPBAR_TITLE
} from "./UIActionTypes";

export function openSideNavBar() {
  return {
    type: SIDE_NAVIGATION_BAR_OPEN
  };
}

export function closeSideNavBar() {
  return {
    type: SIDE_NAVIGATION_BAR_CLOSE
  };
}

export function updateAppBarTitle(title) {
  return {
    type: UPDATE_APPBAR_TITLE,
    payload: {
      title
    }
  }
}
