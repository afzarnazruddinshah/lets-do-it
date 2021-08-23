import { ListItem, List, ListItemIcon, ListItemText, Drawer, Divider} from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
const SideNavigationBar = ({isOpen, onClose}) => {
  
    const handleClose = () => {
        onClose();
    }
    
    const list = () => (
      <div
        role="presentation"
      >
        <List>
          {
            <ListItem button key={'menu-item-1'}>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText primary={'Archives'} />
            </ListItem>}
        </List>
        <Divider />
      </div>
    );
  
    return (
      <div>
          <React.Fragment key={'left-menu-bar'}>
            <Drawer anchor={'left'} open={isOpen} onClose={handleClose}>
                {list()}
            </Drawer>
          </React.Fragment>
      </div>
    );
  }

  const styles = theme =>({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  export default withStyles(styles)(SideNavigationBar);