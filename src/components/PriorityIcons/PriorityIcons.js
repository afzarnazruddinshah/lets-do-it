import React from "react";
import { withStyles } from "@material-ui/core";
import HighPriorityIcon from "@material-ui/icons/NewReleases";
import {} from "../../common/constants";
import { HIGH_PRIORITY, MEDIUM_PRIORITY } from "./../../common/constants";

const PriorityIcon = ({ classes, priority }) => {
  return (
    <HighPriorityIcon
      className={
        priority === HIGH_PRIORITY
          ? classes.highPriority
          : priority === MEDIUM_PRIORITY
          ? classes.mediumPriority
          : classes.lowPriority
      }
    />
  );
};

const styles = (theme) => ({
  highPriority: {
    color: "red",
    position: 'relative',
    verticalAlign: 'sub',
    top: '-1px',
    fontSize: '18px'
  },
  mediumPriority: {
    color: "yellow",
    position: 'relative',
    verticalAlign: 'sub',
    top: '-1px',
    fontSize: '18px'
  },
  lowPriority: {
    color: "#55a630",
    position: 'relative',
    verticalAlign: 'sub',
    top: '-1px',
    fontSize: '18px'
  },
  
});

export default withStyles(styles)(PriorityIcon);
