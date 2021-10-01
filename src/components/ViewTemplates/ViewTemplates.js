import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import TemplateCard from "../TemplateCard/TemplateCard";
import { YOUR_TEMPLATES } from "../../common/constants";
import ViewTemplateDialog from "./ViewTemplateDialog";

const captionGenerator = (len) => {
  return `${len} ${len === 1 ? "item" : "items"}`;
};
const ViewTemplates = (props) => {
  const { classes, templates } = props;
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [selectedTempIndex, setSelectedTemplateIndex] = React.useState(0);

  const handleViewTemplate = (index) => {
    setSelectedTemplateIndex(index);
    setIsDialogOpen(true);
  };

  const handleViewDialogClose = () => {
    setSelectedTemplateIndex(0);
    setIsDialogOpen(false);
  };

  const handleDeleteTemplate = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.root}>
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
          onDeleteClick={handleDeleteTemplate}
        />
      ))}
      <ViewTemplateDialog
        isOpen={isDialogOpen}
        title={templates[selectedTempIndex].templateName}
        caption={captionGenerator(templates[selectedTempIndex].todoList.length)}
        onClickDelete={handleDeleteTemplate}
        onClickClose={handleViewDialogClose}
        todoList={templates[selectedTempIndex].todoList}
      />
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
});

export default withStyles(styles)(ViewTemplates);
