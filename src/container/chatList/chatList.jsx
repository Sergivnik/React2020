// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
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

export function ChatList({ listChat }) {
  const classes = useStyles();
  console.log(listChat);
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {listChat.map((item) => 
          <Link key={item.id} to={`/chat/${item.id}`}>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={item.nameId} />
            </ListItem>
          </Link>
        )}
        {/* <Link to="/chat/1/">
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Федор" />
          </ListItem>
        </Link> 
        primaryText={item.nameId} leftIcon={<ContentSend /> */}
      </List>
    </div>
  );
}
