// Header.jsx
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(() => ({
  root: {
    width: "30%",
    backgroundColor: "#bacc64",
  },
}));

export function ChatList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Федор" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Петро" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Оксана" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Вальдемар" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Ефросинья" />
        </ListItem>
      </List>
    </div>
  );
}
