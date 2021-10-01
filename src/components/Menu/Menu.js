import { Grid, Button } from "@material-ui/core";
import { DeleteForever, Save, Cached } from "@material-ui/icons";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Dialog from "./../Dialog/Dialog";
import { generateRandomUuid } from "../../common/generateRandomUuid";
import SaveTemplateDialog from "./SaveTemplateDialog";
import LoadTemplateDialog from "./LoadTemplateDialog";
import { LOAD_LIST_BTN, SAVE_LIST_BTN, CLEAR_ALL_BTN } from "../../common/constants";
const Menu = (props) => {
  const {
    classes,
    onClearAll,
    isListAvailable,
    onSaveTemplate,
    templates,
    onLoadTemplate,
  } = props;
  const [isClearAllDialogOpen, setIsClearAllDialogOpen] = useState(false);
  const [isSaveTemplateOpen, setIsSaveTemplateOpen] = useState(false);
  const [isLoadTemplateOpen, setIsLoadTemplateOpen] = useState(false);

  //Clear All Dialog Handlers
  const handleClearAllClick = () => {
    setIsClearAllDialogOpen(true);
  };

  const handleClearAllAgree = () => {
    setIsClearAllDialogOpen(false);
    onClearAll();
  };

  const handleClearAllClose = () => {
    setIsClearAllDialogOpen(false);
  };

  //Save Template Dialog Handlers
  const handleSaveTemplate = () => {
    setIsSaveTemplateOpen(true);
  };

  const handleSaveTemplateAgree = (templateName) => {
    setIsSaveTemplateOpen(false);
    onSaveTemplate(templateName, generateRandomUuid());
  };

  const handleSaveTemplateClose = () => {
    setIsSaveTemplateOpen(false);
  };

  //Load Template Dialog Handlers
  const handleLoadTemplate = () => {
    setIsLoadTemplateOpen(true);
  };

  const handleLoadTemplateAgree = (templateId) => {
    setIsLoadTemplateOpen(false);
    onLoadTemplate(templateId);
  };

  const handleLoadTemplateClose = () => {
    setIsLoadTemplateOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        className={classes.menuBar}
      >
        <Grid item className={classes.loadTemplateGrid}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disabled={!Boolean(templates.length)}
            onClick={handleLoadTemplate}
            className={classes.loadTemplateButton}
          >
            {LOAD_LIST_BTN}
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
            {SAVE_LIST_BTN}
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
            {CLEAR_ALL_BTN}
            <DeleteForever className={classes.clearAllIcon} fontSize="small" />
          </Button>
        </Grid>
        <Dialog
          isOpen={isClearAllDialogOpen}
          title={"Confirm Clear All?"}
          caption={"This will delete all your to-do items beyond recovery"}
          primaryBtnLabel={"Yes"}
          secondaryBtnLabel={"No"}
          primaryBtnAction={handleClearAllAgree}
          secondaryBtnAction={handleClearAllClose}
        />
        <SaveTemplateDialog
          isOpen={isSaveTemplateOpen}
          primaryBtnAction={handleSaveTemplateAgree}
          secondaryBtnAction={handleSaveTemplateClose}
        />
        <LoadTemplateDialog
          isOpen={isLoadTemplateOpen}
          templates={templates}
          primaryBtnAction={handleLoadTemplateAgree}
          secondaryBtnAction={handleLoadTemplateClose}
        />
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
    fontSize: "12px",
    backgroundColor: "#e63946",
    borderRadius: theme.spacing(.5),
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
    fontSize: "12px",
    borderRadius: theme.spacing(.5),
  },
  saveTemplateButton: {
    textTransform: "none",
    fontSize: "12px",
    backgroundColor: "#e63946",
    borderRadius: theme.spacing(.5),
  },
  clearAllIcon: {
    verticalAlign: "top",
    position: "relative",
    top: "-1px",
  },
});

Menu.defaultProps = {
  templates: [],
};

export default withStyles(styles)(Menu);
