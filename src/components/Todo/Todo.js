import React from "react";
import {
  withStyles,
  TextField,
  Grid,
  Card,
  FormControl,
  Select,
  MenuItem,
  Tooltip,
  Toolbar,
  IconButton,
  Typography,
  AppBar as MuiAppBar,
} from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import _ from "lodash";
import CardItem from "../Card/CardItem";
import { generateRandomUuid } from "../../common/generateRandomUuid";
import {
  HIGH_PRIORITY,
  LOW_PRIORITY,
  MEDIUM_PRIORITY,
  EMPTY_LIST_MESSAGE,
  ADD_ITEM_PLACEHOLDER,
  ITEM_ALREADY_ADDED,
  MAX_CHARACTERS_TODO_ITEM,
} from "../../common/constants";
import PriorityIcon from "../PriorityIcons/PriorityIcons";
import PriorityIcons from "../PriorityIcons/PriorityIcons";
import { TODO, DONE } from "../../common/constants";
import Features from "../Menu/Menu";

const Todo = (props) => {
  const {
    classes,
    addItem,
    removeItem,
    todoList,
    clearAllItems,
    saveTemplate,
    loadTemplate,
    templates,
  } = props;

  const addTaskTextField = React.useRef(null);
  const [todoItem, setTodoItem] = React.useState("");
  const [priority, setPriority] = React.useState(HIGH_PRIORITY);
  const [showInputToolTip, setShowInputToolTip] = React.useState(false);
  const [inputTooltipMessage, setInputTooltipMessage] = React.useState("");

  React.useEffect(() => {
  }, [todoItem]);

  const handleItemChange = (e) => {
    const value = e.target.value;
    if (value.length <= 65) {
      setTodoItem(value);
      if (showInputToolTip) {
        setShowInputToolTip(false);
      }
    } else {
      setInputTooltipMessage(MAX_CHARACTERS_TODO_ITEM);
      setShowInputToolTip(true);
    }
  };

  const handleInputTooltipClose = () => {
    setShowInputToolTip(false);
  };

  const handleItemAdd = (e) => {
    e.preventDefault();
    const duplicate = todoList.find((item) => item.itemValue === todoItem);
    if (!Boolean(duplicate)) {
      addItem({
        itemId: generateRandomUuid(),
        itemValue: todoItem,
        itemStatus: TODO,
        itemPriority: priority,
      });
      setTodoItem("");
    } else {
      setInputTooltipMessage(ITEM_ALREADY_ADDED);
      setShowInputToolTip(true);
    }
    if (addTaskTextField.current) {
      addTaskTextField.current.focus();
    }
  };

  const handleItemClick = (itemId) => {
    const selectedTodoIndex = todoList.findIndex(
      (item) => item.itemId === itemId
    );
    const modifiedTodo = (todoList[selectedTodoIndex].itemStatus = DONE);
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

  const handleClearAll = () => {
    clearAllItems();
  };

  const handleSaveTemplate = (templateName, templateId) => {
    saveTemplate({ templateName, templateId, todoList });
  };

  const handleLoadTemplate = (templateId) => {
    const selectedTemplate = templates.find(
      (item) => item.templateId === templateId
    );
    loadTemplate(selectedTemplate.todoList);
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.header}></div> */}
      <Grid item>
        <Typography className={classes.dashboardTitle} variant="subtitle1">
          {"Your Board"}
        </Typography>
      </Grid>
      <Card raised={false} className={classes.primaryCard} color="primary">
        <form className={classes.addItemForm} onSubmit={handleItemAdd}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            className={classes.inputContainer}
            xs={12}
          >
            <Grid xs={8} item>
              <Tooltip
                arrow
                onClose={handleInputTooltipClose}
                open={showInputToolTip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement={"top"}
                title={inputTooltipMessage}
              >
                <TextField
                  value={todoItem}
                  className={classes.textField}
                  id="input"
                  color="primary"
                  inputProps={{ maxLength: 70 }}
                  inputRef={addTaskTextField}
                  onChange={handleItemChange}
                  placeholder={ADD_ITEM_PLACEHOLDER}
                  variant="outlined"
                />
              </Tooltip>
            </Grid>
            <Grid xs={2} item className={classes.priorityGrid}>
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
            <Grid xs={2} item className={classes.addButtonGrid}>
              <IconButton
                type="submit"
                aria-label="add-item"
                disabled={!Boolean(todoItem)}
                className={`${classes.addButton} ${
                  !Boolean(todoItem) ? classes.disabledBtn : ""
                }`}
                size="small"
              >
                <ArrowRightAlt
                  className={classes.addButtonIcon}
                  fontSize="small"
                />
              </IconButton>
            </Grid>
          </Grid>
        </form>
        <Card raised={false} className={classes.featuresCard}>
          <Features
            onSaveTemplate={handleSaveTemplate}
            isListAvailable={Boolean(todoList.length)}
            onClearAll={handleClearAll}
            onLoadTemplate={handleLoadTemplate}
            templates={templates}
          />
        </Card>
      </Card>
      {/* <Grid item>
        <Typography className={classes.dashboardTitle} variant="subtitle1">
          {"Your Board"}
        </Typography>
      </Grid> */}
      <div className={classes.input}>
        <div className={classes.todoList}>
          <Card className={classes.todoListCard}>
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
                <PriorityIcons priority={HIGH_PRIORITY} />
                {EMPTY_LIST_MESSAGE}
              </p>
            )}
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
    padding: "10px",
    color: "white",
  },
  primaryCard: {
    backgroundColor: "#00112a",
    color: "white",
    margin: "8px 2px 0px -2px"
  },
  addItemForm: {
    // textAlign: "center"
  },
  featuresCard: {
    marginBottom: "10px",
    paddingBottom: theme.spacing(1),
    backgroundColor: "#00112a",
    color: "white",
    verticalAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
  },
  logo: {
    width: "60px",
    height: "30px",
    display: "inline-block",
  },
  dashboardTitle: {
    textAlign: "left",
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  title: {
    textAlign: "center",
    // border: '1px solid red',
    borderRadius: "10px",
    marginTop: "10%",
    padding: "10px 10px 0px 10px",
    color: "#f1faee",
  },
  emptyList: {
    textAlign: "center",
    color: "#e63946",
  },

  header: {
    margin: "2%",
    marginBottom: "15%",
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
  inputContainer: {
    padding: "10px",
  },
  appTitle: {
    fontWeight: "600",
    paddingLeft: "2%",
    textAlign: "center",
    color: "#f1faee",
  },
  input: {
    // margin: "2%",
  },
  textField: {
    "& .MuiInputBase-root": {
      borderRadius: "4px",
      width: "100%",
      height: theme.spacing(5),
      backgroundColor: "#f1faee",
    },
    "&:hover": {
      border: "#e63946",
    },
  },
  addButton: {
    padding: "10px 0px 10px 0px",
    minWidth: theme.spacing(6),
    height: theme.spacing(4.5),
    borderRadius: theme.spacing(1),
    backgroundColor: "white",
    color: "#e63946",
  },
  disabledBtn: {
    backgroundColor: "#ccc !important",
  },
  priorityGrid: {
    // border: "1px solid white",
  },
  formControl: {
    width: "75%",
    borderRadius: theme.spacing(1),
    backgroundColor: "white",
    padding: theme.spacing(0, 0.5),
    height: theme.spacing(4.5),
    alignItems: "stretch",
    justifyContent: "center",
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
    position: "sticky",
    top: "0",
    zIndex: "99",
  },
  todoListCard: {
    borderRadius: theme.spacing(1),
    marginTop: "10px",
    backgroundColor: "#1d3557",
  },
  addButtonGrid: {
    textAlign: 'right',
    paddingRight: '0px'
  }
});
export default withStyles(styles)(Todo);
