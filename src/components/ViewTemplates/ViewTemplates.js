import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import TemplateCard from "../TemplateCard/TemplateCard";
import {
  TEMPLATE_DELETED_SUCCESSFULLY,
  YOUR_TEMPLATES,
} from "../../common/constants";
import ViewTemplateDialog from "./ViewTemplateDialog";
import Dialog from "../Dialog/Dialog";

const captionGenerator = (len) => {
  return `${len} ${len === 1 ? "item" : "items"}`;
};
const ViewTemplates = (props) => {
  const { classes, templates, deleteTemplate, openSnackBar } = props;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isDelTemplateDialogOpen, setIsDelTemplateDialogOpen] =
    React.useState(false);
  const [selectedTempIndex, setSelectedTemplateIndex] = React.useState(0);

  //Open View Template Dialog
  const handleViewTemplate = (index) => {
    setSelectedTemplateIndex(index);
    setIsDialogOpen(true);
  };

  //Close View template dialog
  const handleViewDialogClose = () => {
    setSelectedTemplateIndex(0);
    setIsDialogOpen(false);
  };

  const handleDelTempConfirm = () => {
    setIsDelTemplateDialogOpen(false);
    deleteTemplate(selectedTempIndex);
    openSnackBar(TEMPLATE_DELETED_SUCCESSFULLY);
  };

  const handleDelTempDialogOpen = (index) => {
    setSelectedTemplateIndex(index);
    setIsDelTemplateDialogOpen(true);
  };

  const handleDelTempDialogClose = () => {
    setSelectedTemplateIndex(0);
    setIsDelTemplateDialogOpen(false);
  };
  return (
    <div className={classes.root}>
      {templates.length ? (
        <>
          <Typography className={classes.title} variant="h6">
            {YOUR_TEMPLATES}
          </Typography>
          {templates.map((template, index) => (
            <TemplateCard
              id={index}
              key={index}
              primaryText={template.templateName}
              secondaryText={captionGenerator(template.todoList.length)}
              onViewClick={handleViewTemplate}
              onDeleteClick={handleDelTempDialogOpen}
            />
          ))}
          <ViewTemplateDialog
            isOpen={isDialogOpen}
            title={templates[selectedTempIndex].templateName}
            caption={captionGenerator(
              templates[selectedTempIndex].todoList.length
            )}
            onClickDelete={handleDelTempDialogOpen}
            onClickClose={handleViewDialogClose}
            todoList={templates[selectedTempIndex].todoList}
          />
          {/* Delete Tempalte Confirmation Dialog */}
          <Dialog
            isOpen={isDelTemplateDialogOpen}
            title={"Confirm Delete Template"}
            caption={"This will delete the template beyond recovery."}
            primaryBtnLabel={"Confirm"}
            secondaryBtnLabel={"Cancel"}
            primaryBtnAction={handleDelTempConfirm}
            secondaryBtnAction={handleDelTempDialogClose}
          />
        </>
      ) : (
        <div className={classes.emptyAlert}>
          {/* <p>You don't have any Templates</p> */}
          <Alert className={classes.alertContainer} severity="info">
            <AlertTitle>You don't have any Templates </AlertTitle>
          </Alert>
        </div>
      )}
    </div>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: "10px",
    color: "white",
  },
  title: {
    paddingLeft: theme.spacing(2),
    fontSize: "16px",
  },
  emptyAlert: {
    width: "100%",
    height: "90vh",
    // textAlign: "center",
    verticalAlign: "middle",
  },
  alertContainer: {
    width: "90%",
    margin: "auto",
    justifyContent: "center",
  },
});

export default withStyles(styles)(ViewTemplates);
