import React from "react";
import Radio from "@mui/material/Radio";
import MuiRadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export const RadioGroup = ({value, options, onSelectValue, labelProp, valueProp}) => {

  const handleTemplateChange = (event) => {
    onSelectValue(event.target.value);
  };

  return (
    <>
      <MuiRadioGroup
        aria-label="templates"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleTemplateChange}
      >
        {options.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item[valueProp]}
              control={<Radio />}
              label={item[labelProp]}
            />
        ))}
      </MuiRadioGroup>
    </>
  );
};
