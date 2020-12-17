// ChatList.jsx
import React from "react";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import "./chatListStyle.sass";

const useStyles = makeStyles(() => ({
  root: {
    width: "30%",
    backgroundColor: "#bacc64",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

function ChatList({ onClickAdd, chats }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {chats.map((item) => (
          <div key={item.id} className={"LinkBtn"}>
            <Link to={`/chat/${item.id}`}>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary={item.nameId} />
              </ListItem>
            </Link>
            <Link to={`/profile/${item.id}`}>
              <button className={"btnProfile"}>{item.nameId[0]}</button>
            </Link>
          </div>
        ))}
      </List>
      <button className={"btnAddChat"} onClick={onClickAdd}>
        Добавить чат
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(ChatList);
