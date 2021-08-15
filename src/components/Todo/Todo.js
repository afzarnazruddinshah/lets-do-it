import React from "react";
import {
  Typography,
  withStyles,
  TextField,
  Button,
  Grid,
  Card,
} from "@material-ui/core";
import _ from "lodash";
import CardItem from "../Card/CardItem";
import { generateRandomUuid } from "../../common/generateRandomUuid";
import DoneIcon from '@material-ui/icons/Done';

export const TODO = "To Do";
export const DONE = "Done";

const Todo = (props) => {
  console.log(props);
  const { classes, addItem, removeItem, todoList, date:today } = props;
  const [todoItem, setTodoItem] = React.useState("");
  const month = today.split(" ")[1];
  const date = today.split(" ")[2];
  const year = today.split(" ")[3];

  const handleItemChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleItemAdd = () => {
    addItem({ itemId: generateRandomUuid(), itemValue: todoItem, itemStatus: TODO });
    setTodoItem("");
  };

  const handleItemClick = (itemId) => {
    const ret = _.chain(todoList)
      .find({ itemId: itemId })
      .merge({ itemStatus: DONE })
      .value();
    removeItem(itemId);
    addItem(ret);
    
  };

  const handleItemDelete = (itemId) => {
    removeItem(itemId);
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Grid item className={classes.title}>
          <Typography className={classes.appTitle} variant="h5">
            {`${month} ${date} ${year}`}
          </Typography>
        </Grid>
      </div>
      <div className={classes.input}>
      <Card className={classes.card}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          className={classes.inputContainer}
        >
          <Grid item>
            <TextField
              value={todoItem}
              id="input"
              className={classes.textField}
              variant="outlined"
              onChange={handleItemChange}
              placeholder={"What's on your list.."}
            />
          </Grid>
          <Grid item>
            {" "}
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
            >
              <DoneIcon onClick={handleItemAdd} />
              
            </Button>
          </Grid>
        </Grid>
        </Card>
        <div className={classes.todoList}>
        <Card className={classes.todoListCard}>
          {todoList.map((todoItem, index) => (
            <CardItem
              itemId={todoItem.itemId}
              onClick={handleItemClick}
              onDelete={handleItemDelete}
              key={index}
              label={todoItem.itemValue}
              status={todoItem.itemStatus}
            />
          ))}
          </Card>
      </div>
      </div>
      
    </div>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: "10px"
  },
  logo: {
    width: "60px",
    height: "30px",
    display: "inline-block",
  },
  title: {
    textAlign: "center",
    // border: '1px solid red',
    borderRadius: "10px",
    padding: "10px",
    color: "#f1faee"
  },
  appTitle: {
    fontWeight: "800",
    color: "#f1faee"
  },
  header: {
    margin: "2%",
    marginBottom: "10%"
  },
  inputContainer: {
    padding: '10px'
  },
  input: {
    margin: "2%",
  },
  textField: {
    "& .MuiInputBase-root": {
      borderRadius: "20px",
      width: "120%",
      height: "50px",
      backgroundColor: "#f1faee"
    },
    '&:hover': {
      border: "#e63946"
    }
  },
  addButton: {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "#e63946"
  },
  todoList: {
    width: "100%",
    margin: "auto",
  },
  card: {
    borderRadius: "20px",
    backgroundColor: "#a8dadc"
  },
  todoListCard: {
    borderRadius: "20px",
    marginTop: "10px",
    backgroundColor: "#a8dadc"
  }
});
export default withStyles(styles)(Todo);
