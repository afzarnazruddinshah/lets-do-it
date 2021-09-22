import React from "react";
import Dialog from "../Dialog/Dialog";
import { TextField } from "@material-ui/core";

const SaveTemplateDialog = ({
  isOpen,
  primaryBtnAction,
  secondaryBtnAction,
  className
}) => {
  const [templateName, setTemplateName] = React.useState('');

  const handleTemplateChange = (e) => {
    setTemplateName(e.target.value);
  }

  const handleDialogSubmit = () => {
    primaryBtnAction(templateName);
  }

  return (
    <Dialog
      isOpen={isOpen}
      title="Save Template"
      caption="Please enter Template name"
      primaryBtnLabel={'Save'}
      secondaryBtnLabel={'Cancel'}
      primaryBtnAction={handleDialogSubmit}
      secondaryBtnAction={secondaryBtnAction}
    >
      <TextField
        id="template-input"
        onChange={handleTemplateChange}
        className={className}
        variant="outlined"
        placeholder={"Template Name"}
      />
    </Dialog>
  );
};

export default SaveTemplateDialog;
