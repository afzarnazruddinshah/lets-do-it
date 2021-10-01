import {
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  ListItemText,
  withStyles,
  Avatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, Description } from "@material-ui/icons";
import React from "react";

const TemplateCard = (props) => {
  const {
    classes,
    id,
    primaryText,
    secondaryText,
    onDeleteClick,
    onViewClick,
  } = props;

  const handleDelete = () => {
    onDeleteClick(id);
  };

  const handleView = () => {
    onViewClick(id);
  };
  return (
    <List className={classes.list}>
      <ListItem>
        <ListItemAvatar onClick={handleView}>
          <Avatar>
            <Description />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          onClick={handleView}
          primary={primaryText}
          secondary={secondaryText}
        />
        <ListItemSecondaryAction>
          <IconButton
            className={classes.iconButton}
            onClick={handleDelete}
            edge="end"
            aria-label="delete"
          >
            <Delete className={classes.secondaryBtn} color="inherit" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

const styles = (theme) => ({
  list: {
    "& .MuiTypography-root": {
      color: "white",
    },
  },
  iconButton: {},
  secondaryBtn: {
    color: "#ccc",
  },
});

export default withStyles(styles)(TemplateCard);
