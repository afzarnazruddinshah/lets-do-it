import { Grid, Button, TextField } from "@material-ui/core";
import { DeleteForever, Save, Cached } from "@material-ui/icons";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Dialog from "./../Dialog/Dialog";

const Menu = (props) => {
  const { classes, onClearAll, isListAvailable, onSaveTemplate } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dialogProps, setDialogProps] = useState({
    title: "",
    contentText: "",
  });
  const templateNameRef = React.useRef(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClearAllClick = () => {
    setDialogProps(clearAllDialogProps);
    setIsModalOpen(true);
  };

  const handleClearAllAgree = () => {
    setIsModalOpen(false);
    onClearAll();
  };

  const handleSaveTemplate = () => {
    setDialogProps(saveTemplateDialogProps);
    setIsModalOpen(true);
  };

  const handleSaveTemplateAgree = () => {
    console.log(templateNameRef.current.value);
    setIsModalOpen(false);
    onSaveTemplate(templateNameRef.current.value);
  };

  // const handleLoadTemplateAgree = () => {
  //   setIsModalOpen(false);
  //   onSaveTemplate(templateNameRef.current.value);
  // };

  // const loadTemplateDialogProps = {
  //   title: "Select a Template",
  //   onClickYes: () => handleLoadTemplateAgree(),
  //   onClickNo: () => handleModalClose(),
  // };

  const clearAllDialogProps = {
    title: "Confirm Clear All?",
    contentText: "This will delete all your to-do items beyond recovery",
    children: "",
    onClickYes: () => handleClearAllAgree(),
    onClickNo: () => handleModalClose(),
  };

  const saveTemplateDialogProps = {
    title: "Save Template",
    contentText: "Please enter a name",
    onClickYes: () => handleSaveTemplateAgree(),
    onClickNo: () => handleModalClose(),
    children: (
      <TextField
        id="template-input"
        inputRef={templateNameRef}
        className={classes.textField}
        variant="outlined"
        placeholder={"Template Name"}
      />
    ),
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
        className={classes.menuBar}
      >
        <Grid item className={classes.loadTemplateGrid}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disabled
            onClick={handleSaveTemplate}
            className={classes.loadTemplateButton}
          >
            Load Template
            <Cached className={classes.clearAllIcon} fontSize="small" />
          </Button>
        </Grid>
        <Grid item className={classes.saveTemplateGrid}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleSaveTemplate}
            disabled={!isListAvailable}
            className={classes.saveTemplateButton}
          >
            Save as Template
            <Save className={classes.clearAllIcon} fontSize="small" />
          </Button>
        </Grid>
        <Grid item className={classes.clearAllGrid}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleClearAllClick}
            disabled={!isListAvailable}
            className={classes.clearAllButton}
          >
            Clear All
            <DeleteForever className={classes.clearAllIcon} fontSize="small" />
          </Button>
        </Grid>
        <Dialog isOpen={isModalOpen} dialogProps={dialogProps} />
      </Grid>
    </>
  );
};

const styles = (theme) => ({
  menuBar: {
    width: "100%",
    margin: "0px",
    padding: "10px",
    height: "40px",
    borderRadius: "20px 20px 0px 0px",
  },
  clearAllGrid: {
    padding: "0px !important",
  },
  clearAllButton: {
    textTransform: "none",
    fontSize: '12px',
    backgroundColor: "#e63946",
    borderRadius: "5px 20px 5px 5px",
  },
  loadTemplateGrid: {
    padding: "0px !important",
    paddingRight: "7px !important",
  },
  saveTemplateGrid: {
    padding: "0px !important",
    paddingRight: "7px !important",
  },
  loadTemplateButton: {
    textTransform: "none",
    backgroundColor: "#e63946",
    fontSize: '12px',
    borderRadius: "20px 5px 5px 5px",
  },
  saveTemplateButton: {
    textTransform: "none",
    fontSize: '12px',
    backgroundColor: "#e63946",
    borderRadius: "5px 5px 5px 5px",
  },
  clearAllIcon: {
    verticalAlign: "top",
    position: "relative",
    top: "-1px",
  },
});

export default withStyles(styles)(Menu);
