import React from "react";
import {
  Typography,
  withStyles,
  TextField,
  Grid,
  Card,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import _ from "lodash";
import CardItem from "../Card/CardItem";
import { generateRandomUuid } from "../../common/generateRandomUuid";
import {
  HIGH_PRIORITY,
  LOW_PRIORITY,
  MEDIUM_PRIORITY,
} from "../../common/constants";
import PriorityIcon from "../PriorityIcons/PriorityIcons";
import PriorityIcons from "../PriorityIcons/PriorityIcons";
import Logo from "../Logo/logo";
import MenuIcon from "@material-ui/icons/Menu";
import SideNavigationBar from "../SideNavigationBar/SideNavigationBar";
import { TODO, DONE } from "../../common/constants";
import Menu from "../Menu/Menu";

const Todo = (props) => {
  const {
    classes,
    addItem,
    removeItem,
    todoList,
    date: today,
    clearAllItems,
    saveTemplate
  } = props;
  const addTaskTextField = React.useRef(null);
  const [todoItem, setTodoItem] = React.useState("");
  const [priority, setPriority] = React.useState(MEDIUM_PRIORITY);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const month = today.split(" ")[1];
  const date = today.split(" ")[2];
  const year = today.split(" ")[3];

  const handleItemChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleItemAdd = () => {
    addItem({
      itemId: generateRandomUuid(),
      itemValue: todoItem,
      itemStatus: TODO,
      itemPriority: priority,
    });
    setTodoItem("");
    if (addTaskTextField.current) {
      addTaskTextField.current.focus();
    }
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
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleClearAll = () => {
    clearAllItems();
  };

  const handleSaveTemplate = (templateName) => {
    saveTemplate({ templateName, todoList});
  };

  const handleLoadTemplate = (templateName) => {
    
  }

  console.log(props);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          className={classes.inputContainer}
        >
          <Grid
            onClick={handleMenuClick}
            item
            className={classes.menuContainer}
          >
            {" "}
            <MenuIcon fontSize="large" className={classes.menuIcon} />
          </Grid>
          <Grid item>
            <Logo />{" "}
            <Typography className={classes.appTitle} variant="caption">
              {`${month} ${date} ${year}`}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.input}>
        <Card className={classes.card}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
            className={classes.inputContainer}
          >
            <Grid item className={classes.grid1}>
              <TextField
                value={todoItem}
                id="input"
                inputRef={addTaskTextField}
                className={classes.textField}
                variant="outlined"
                onChange={handleItemChange}
                placeholder={"What's on your list.."}
              />
            </Grid>
            <Grid item className={classes.grid2}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={handlePriorityChange}
                  value={priority}
                  className={classes.formSelect}
                  disableUnderline
                >
                  <MenuItem value={HIGH_PRIORITY}>
                    <PriorityIcon priority={HIGH_PRIORITY} />
                  </MenuItem>
                  <MenuItem value={MEDIUM_PRIORITY}>
                    <PriorityIcon priority={MEDIUM_PRIORITY} />
                  </MenuItem>
                  <MenuItem value={LOW_PRIORITY}>
                    <PriorityIcon priority={LOW_PRIORITY} />
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item className={classes.grid3}>
              <IconButton
                aria-label="add-item"
                className={classes.addButton}
                size="small"
                onClick={handleItemAdd}
              >
                <DoneIcon className={classes.addButtonIcon} fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
        <div className={classes.todoList}>
          <Card className={classes.todoListCard}>
            <Menu
              onSaveTemplate={handleSaveTemplate}
              isListAvailable={Boolean(todoList.length)}
              onClearAll={handleClearAll}
              onLoadTemplate={handleLoadTemplate}
            />
            {todoList.map((todoItem, index) => (
              <CardItem
                itemId={todoItem.itemId}
                itemPriority={todoItem.itemPriority}
                onClick={handleItemClick}
                onDelete={handleItemDelete}
                key={index}
                label={todoItem.itemValue}
                status={todoItem.itemStatus}
              />
            ))}
            {todoList.length === 0 && (
              <p className={classes.emptyList}>
                <PriorityIcons priority={HIGH_PRIORITY} /> Rest in the end, not
                in the Middle.
              </p>
            )}
          </Card>
          {/* {todoList.length === 0 && <p>It Feels empty here :(</p>} */}
        </div>
      </div>
      <SideNavigationBar onClose={handleMenuClose} isOpen={isMenuOpen} />
    </div>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: "10px",
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
    marginTop: "10%",
    padding: "10px 10px 0px 10px",
    color: "#f1faee",
  },
  menuContainer: {
    padding: "0px !important",
  },
  menuIcon: {
    color: "#f1faee",
    verticalAlign: "bottom",
    position: "relative",
    top: "-10px",
  },
  emptyList: {
    textAlign: "center",
    color: "#e63946",
  },
  appTitle: {
    fontWeight: "600",
    paddingLeft: "2%",
    textAlign: "center",
    color: "#f1faee",
  },
  header: {
    margin: "2%",
    marginBottom: "15%",
  },
  grid1: {
    padding: "12px !important",
  },
  grid2: {
    padding: "12px !important",
  },
  grid3: {
    padding: "12px 0px !important",
  },
  inputContainer: {
    padding: "10px",
  },
  input: {
    margin: "2%",
  },
  textField: {
    "& .MuiInputBase-root": {
      borderRadius: "20px",
      width: "100%",
      height: "50px",
      backgroundColor: "#f1faee",
    },
    "&:hover": {
      border: "#e63946",
    },
  },
  addButton: {
    padding: "10px",
    borderRadius: "18px",
    backgroundColor: "#e63946",
    color: "#f1faee",
  },
  addButtonIcon: {
    borderRadius: "10px",
  },
  formControl: {
    width: "100%",
  },
  formSelect: {
    "&": {
      borderBottom: "none",
    },
  },
  todoList: {
    width: "100%",
    margin: "auto",
  },
  card: {
    borderRadius: "20px",
    backgroundColor: "#a8dadc",
  },
  todoListCard: {
    borderRadius: "20px",
    marginTop: "10px",
    backgroundColor: "#a8dadc",
  },
});
export default withStyles(styles)(Todo);
