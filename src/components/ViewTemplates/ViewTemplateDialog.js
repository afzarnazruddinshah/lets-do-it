import React from "react";
import CardItem from "../Card/CardItem";
import Dialog from "../Dialog/Dialog";

const ViewTemplateDialog = ({
  isOpen,
  children,
  todoList,
  title,
  caption,
  onClickDelete,
  onClickClose
}) => {

  // const handleTemplateDelete = () => {
  //   onClickDelete();
  // };

  return (
    <Dialog
      isOpen={isOpen}
      title={title}
      caption={caption}
      titleAction={"delete"}
      onClickTitleAction={onClickDelete}
      secondaryBtnLabel={'Cancel'}
      secondaryBtnAction={onClickClose}
    >
      {todoList.map((todoItem, index) => (
              <CardItem
                itemId={todoItem.itemId}
                itemPriority={todoItem.itemPriority}
                onDelete={()=>{}}
                onClick={()=>{}}
                key={index}
                label={todoItem.itemValue}
                status={todoItem.itemStatus}
              />
            ))}
    </Dialog>
  );
};

export default ViewTemplateDialog;
