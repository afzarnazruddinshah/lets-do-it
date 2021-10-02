import React from "react";
import { withStyles, Chip, Paper, Grid, IconButton } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { TODO } from "../../common/constants";
import PriorityIcon from "../PriorityIcons/PriorityIcons";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const CardItem = (props) => {
  const { classes, label, status, itemId, onClick, onDelete, itemPriority } =
    props;

  const handleItemClick = () => {
    onClick(itemId);
  };

  const handleDelete = () => {
    onDelete(itemId);
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Grid
          container
          className={status === TODO ? classes.chip : classes.chipDone}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={1} className={classes.grid}>
            <IconButton onClick={handleDelete} className={classes.delButton}>
              <DeleteOutlineIcon className={classes.icon} fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <span className={classes.label}>
              {" "}
              {label} <PriorityIcon priority={itemPriority} />
            </span>
          </Grid>
          <Grid item xs={1} className={classes.grid}>
            {status === TODO ? (
              <CheckCircleOutlineIcon
                onClick={handleItemClick}
                className={classes.chipTodo}
              />
            ) : (
              <CheckCircleIcon
                fontSize="large"
                className={classes.doneTickIcon}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    margin: "20px",
  },
  paper: {
    backgroundColor: "#1d3557",
  },
  chip: {
    color: "#f1faee",
    borderRadius: theme.spacing(1),
    fontSize: "16px",
    padding: theme.spacing(0.75),
    maxHeight: "64px",
    height: "inherit",
    width: "inherit",
    backgroundColor: "#00112a",
    "& .MuiChip-label": {
      padding: "10px 40px 10px 10px",
    },
  },
  chipTodo: {
    color: "#f1faee",
  },
  chipDone: {
    color: "#f1faee",
    borderRadius: theme.spacing(1),
    backgroundColor: "#55a630",
    fontSize: "16px",
    padding: theme.spacing(0.75),
    maxHeight: "50px",
    width: "100%",
    "& .MuiChip-label": {
      padding: "10px 40px 10px 10px",
    },
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  doneTickIcon: {
    color: "green",
    fontSize: "20px",
  },
  label: {
    whiteSpace: "normal",
  },
  grid: {
    textAlign: "center",
  },
  delButton: {
    paddingLeft: "0px",
    paddingRight: "0px",
    color: "red",
  },
});
export default withStyles(styles)(CardItem);
