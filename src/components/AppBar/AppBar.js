import React from "react";
import {
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  AppBar as MuiAppBar
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const AppBar = (props) => {
  const { classes, title, onMenuClick } = props;
  const handleMenuClick = () => {
    onMenuClick();
  }
  return (
      <MuiAppBar component='div' className={classes.muiAppBar} position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <Menu/>
          </IconButton>
          <Typography className={classes.title} variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {/* <Button color="inherit">
            <AccountCircle />
          </Button> */}
        </Toolbar>
      </MuiAppBar>
  );
};

const styles = (theme) => ({
    muiAppBar: {
        backgroundColor: '#00112a',
        borderRadius: '3px',
        textAlign: 'center',
        margin: '2% 2% 0% 2%',
        '& .MuiToolbar-regular': {
            minHeight: '0'
        }
    },
    title:{
      textTransform: 'capitalize'
    }
});
export default withStyles(styles)(AppBar);
