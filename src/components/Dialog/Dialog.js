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
  const { dialogProps, isOpen } = props;

  const handleClickYes = () => {
    dialogProps.onClickYes();
  };

  const handleClickNo = () => {
    dialogProps.onClickNo();
  };

  return (
    <MuiDialog
      open={isOpen}
      onClose={dialogProps.onClickNo}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogProps.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialogProps.contentText}
        </DialogContentText>
        {dialogProps.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickNo} color="default">
          No
        </Button>
        <Button onClick={handleClickYes} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
