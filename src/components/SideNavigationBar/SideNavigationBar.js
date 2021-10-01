import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
} from "@material-ui/core";
import React, { useCallback } from "react";
import { withStyles } from "@material-ui/core";
import { ListAlt, DashboardRounded } from "@material-ui/icons";

const SideNavigationBar = (props) => {
  const { isOpen, onClose, classes, push, updateAppBarTitle} = props;
  const handleClose = () => {
    onClose();
  };

  const handleMenuClick = useCallback((event) => {
    const title = event.currentTarget.getAttribute("data-name");
    updateAppBarTitle(title);
    push(title);
    onClose();
  }, []);

  const list = () => (
    <div role="presentation">
      <List>
        {
          <>
            <div className={classes.userProfileCard}></div>
            <Divider />
            <ListItem
              data-name={"todo"}
              onClick={handleMenuClick}
              button
              key={"menu-item-1"}
            >
              <ListItemIcon>{<DashboardRounded />}</ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem
              data-name={"templates"}
              onClick={handleMenuClick}
              button
              key={"menu-item-2"}
            >
              <ListItemIcon>{<ListAlt />}</ListItemIcon>
              <ListItemText primary={"Templates"} />
            </ListItem>
          </>
        }
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left-menu-bar"}>
        <Drawer
          SlideProps={{ className: classes.leftMenuBar }}
          anchor={"left"}
          open={isOpen}
          onClose={handleClose}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

const styles = (theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  leftMenuBar: {
    width: "45%",
    height: "100%"
  },
  userProfileCard: {
    minHeight: "40px",
  },
});

export default withStyles(styles)(SideNavigationBar);
