import React from "react";
import {
  Route,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";
import SideNavigationBar from "./components/SideNavigationBar/SideNavigationBar";
import TodoContainer from "./components/Todo/TodoContainer";
import { connect } from "react-redux";
import { closeSideNavBar, openSideNavBar,updateAppBarTitle } from "./redux/actions/UI/UIActions";
import ViewTemplatesContainer from "./components/ViewTemplates/ViewTemplatesContainer";
import AppBar from "./components/AppBar/AppBar";
import { withStyles } from "@material-ui/core";

export const RESTART = "RESTART";
export const PREV = "PREV";
export const NEXT = "NEXT";

const Routes = (props) => {
  const { isSideNavBarOpen, closeSideNavBar, openSideNavBar, appBarTitle, updateAppBarTitle } = props;

  const handleMenuClick = () => {
    openSideNavBar();
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
  appBarTitle: state.ui.title
});

const mapDispatchToProps = (dispatch) => ({
  closeSideNavBar: () => dispatch(closeSideNavBar()),
  openSideNavBar: () => dispatch(openSideNavBar()),
  updateAppBarTitle: (title) => dispatch(updateAppBarTitle(title))
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
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Routes)
);
