import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import SideNavigationBar from "./components/SideNavigationBar/SideNavigationBar";
import TodoContainer from "./components/Todo/TodoContainer";
import { connect } from "react-redux";
import {
  closeSideNavBar,
  openSideNavBar,
  closeSnackbar,
  updateAppBarTitle,
} from "./redux/actions/UI/UIActions";
import ViewTemplatesContainer from "./components/ViewTemplates/ViewTemplatesContainer";
import AppBar from "./components/AppBar/AppBar";
import { withStyles, Snackbar } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { SNACKBAR_AUTOHIDE_DURATION } from "./common/constants";
import Slide from "@mui/material/Slide";

export const RESTART = "RESTART";
export const PREV = "PREV";
export const NEXT = "NEXT";

const Routes = (props) => {
  const {
    classes,
    isSideNavBarOpen,
    closeSideNavBar,
    openSideNavBar,
    appBarTitle,
    updateAppBarTitle,
    isSnackbarOpen,
    snackbarMessage,
    closeSnackbar,
  } = props;

  const handleMenuClick = () => {
    openSideNavBar();
  };

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    closeSnackbar();
  };

  return (
    <>
      <HashRouter basename="/">
        <Route
          render={(props) => (
            <>
              <div>
                <AppBar onMenuClick={handleMenuClick} title={appBarTitle} />
              </div>
              <SideNavigationBar
                {...props.history}
                isOpen={isSideNavBarOpen}
                onClose={closeSideNavBar}
                updateAppBarTitle={updateAppBarTitle}
              />
              <Snackbar
                className={classes.snackbar}
                open={isSnackbarOpen}
                TransitionComponent={SlideTransition}
                autoHideDuration={SNACKBAR_AUTOHIDE_DURATION}
                onClose={handleSnackbarClose}
              >
                <Alert severity="success">{snackbarMessage}</Alert>
              </Snackbar>
            </>
          )}
        />
        <Switch>
          <Route
            exact
            path="/lets-do-it/"
            render={() => <Redirect to="/todo" />}
          />
          <Route exact path="/" render={() => <Redirect to="/todo" />} />
          <Route exact path="/todo" component={TodoContainer} />
          <Route exact path="/templates" component={ViewTemplatesContainer} />
          {/* <Route path="/templates" component={}  /> */}
        </Switch>
      </HashRouter>
    </>
  );
};

const mapStateToProps = (state) => ({
  isSideNavBarOpen: state.ui.isSideNavBarOpen,
  appBarTitle: state.ui.title,
  isSnackbarOpen: state.ui.isSnackbarOpen,
  snackbarMessage: state.ui.snackbarMessage,
});

const mapDispatchToProps = (dispatch) => ({
  closeSideNavBar: () => dispatch(closeSideNavBar()),
  openSideNavBar: () => dispatch(openSideNavBar()),
  updateAppBarTitle: (title) => dispatch(updateAppBarTitle(title)),
  closeSnackbar: () => dispatch(closeSnackbar()),
});

const styles = (theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: "10px",
  },
  header: {
    margin: "2%",
    marginBottom: "15%",
  },
  snackbar: {
    color: "white",
  },
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Routes)
);
