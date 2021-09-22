import React from "react";
import Dialog from "../Dialog/Dialog";
import { RadioGroup } from "../RadioGroup/RadioGroup";

const LoadTemplateDialog = ({
  isOpen,
  primaryBtnAction,
  secondaryBtnAction,
  templates,
  className,
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = React.useState("");

  const handleTemplateChange = (id) => {
    setSelectedTemplateId(id);
  };

  const handleDialogSubmit = () => {
    primaryBtnAction(selectedTemplateId);
  };

  return (
    <Dialog
      isOpen={isOpen}
      title={"Select a Template"}
      caption={'This will replace the existing Todo Items'}
      primaryBtnLabel={"Confirm"}
      secondaryBtnLabel={"Cancel"}
      primaryBtnAction={handleDialogSubmit}
      secondaryBtnAction={secondaryBtnAction}
    >
      <RadioGroup
        className={className}
        value={selectedTemplateId}
        options={templates}
        onSelectValue={handleTemplateChange}
        labelProp={'templateName'}
        valueProp={'templateId'}
      />
    </Dialog>
  );
};

export default LoadTemplateDialog;
