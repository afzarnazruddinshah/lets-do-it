import React from "react";
import { withStyles, Chip } from "@material-ui/core";
import { TODO } from "../Todo/Todo";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const CardItem = (props) => {
  const { classes, label, status, itemId, onClick, onDelete } = props;

  const handleItemClick = () => {
    onClick(itemId);
  };

  const handleDelete = () => {
      onDelete(itemId);
  }
  return (
    <div className={classes.root}>
      <Chip
        icon={<DeleteOutlineIcon className={classes.icon} fontSize="small" onClick={handleDelete} />}
        className={status === TODO ? classes.chip : classes.chipDone}
        color="primary"
        label={`  ${label}`}
        onDelete={handleItemClick}
        deleteIcon={status === TODO ? <CancelIcon className={classes.chipTodo}/> :<CheckCircleIcon fontSize="large" className={classes.doneTickIcon}/>}
      />
    </div>
  );
};

const styles = (theme) => ({
  root: {
    margin: "20px",
    border: '1px solid #ccc',
  },
  chip: {
    color: "#f1faee",
    borderRadius: "10px",
    fontSize: "16px",
    padding: "20px 5px 20px 5px",
    backgroundColor: "#1d3557",
    '& .MuiChip-label': {
      padding: "10px 40px 10px 10px"
    }
  },
  chipTodo: {
      color: '#e63946'
  },
  chipDone: {
    color: "#f1faee",
    borderRadius: "10px",
    backgroundColor: "#55a630",
    fontSize: "16px",
    padding: "20px 5px 20px 5px",
    '& .MuiChip-label': {
      padding: "10px 40px 10px 10px"
    }
  },
  icon: {
    cursor: 'pointer',
    '&:hover': {
      color: 'red'
    }
  },
  doneTickIcon: {
    color: "green",
    fontSize: "20px"
  }

});
export default withStyles(styles)(CardItem);
