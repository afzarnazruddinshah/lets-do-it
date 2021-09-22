import { Grid, Button } from "@material-ui/core";
import { DeleteForever, Save, Cached } from "@material-ui/icons";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core";
import Dialog from "./../Dialog/Dialog";
import { generateRandomUuid } from "../../common/generateRandomUuid";
import SaveTemplateDialog from "./SaveTemplateDialog";
import LoadTemplateDialog from "./LoadTemplateDialog";

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
            disabled={!Boolean(templates.length)}
            onClick={handleLoadTemplate}
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
    fontSize: "12px",
    borderRadius: "20px 5px 5px 5px",
  },
  saveTemplateButton: {
    textTransform: "none",
    fontSize: "12px",
    backgroundColor: "#e63946",
    borderRadius: "5px 5px 5px 5px",
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
