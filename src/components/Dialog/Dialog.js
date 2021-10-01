import React from "react";
import {
  Button,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  withStyles,
  Grid,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
const Dialog = (props) => {
  const {
    title,
    caption,
    titleAction,
    isOpen,
    primaryBtnLabel,
    primaryBtnAction,
    secondaryBtnLabel,
    secondaryBtnAction,
    children,
    onClickTitleAction,
    classes,
  } = props;

  const handleClickYes = () => {
    primaryBtnAction();
  };

  const handleClickNo = () => {
    secondaryBtnAction();
  };

  return (
    <MuiDialog
      open={isOpen}
      onClose={secondaryBtnAction}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>{title}</Grid>
          <Grid item>
            {titleAction &&
              (titleAction === "delete" ? (
                <IconButton
                  aria-label="close"
                  className={classes.deleteIcon}
                  onClick={onClickTitleAction}
                  edge={"end"}
                >
                  <DeleteForever />
                </IconButton>
              ) : (
                ""
              ))}
          </Grid>
        </Grid>
      </DialogTitle>
      {caption && (
        <DialogContent>
          <DialogContentText id="dialog-description">
            {caption}
          </DialogContentText>
          {children}
        </DialogContent>
      )}
      <DialogActions>
        {secondaryBtnLabel && (
          <Button onClick={handleClickNo} color="default">
            {secondaryBtnLabel}
          </Button>
        )}
        {primaryBtnLabel && (
          <Button onClick={handleClickYes} color="primary" autoFocus>
            {primaryBtnLabel}
          </Button>
        )}
      </DialogActions>
    </MuiDialog>
  );
};

const styles = (theme) => ({
  deleteIcon: {},
});

export default withStyles(styles)(Dialog);
