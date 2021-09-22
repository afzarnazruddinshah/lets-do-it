import React from "react";
import {
  Button,
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const Dialog = (props) => {
  const {
    title,
    caption,
    isOpen,
    primaryBtnLabel,
    primaryBtnAction,
    secondaryBtnLabel,
    secondaryBtnAction,
    children
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
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      {caption && (
        <DialogContent>
          <DialogContentText id="dialog-description">
            {caption}
          </DialogContentText>
          {children}
        </DialogContent>
      )}
      {primaryBtnAction && secondaryBtnAction && (
        <DialogActions>
          <Button onClick={handleClickNo} color="default">
            {secondaryBtnLabel}
          </Button>
          <Button onClick={handleClickYes} color="primary" autoFocus>
          {primaryBtnLabel}
          </Button>
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
