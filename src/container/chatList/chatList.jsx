// ChatList.jsx
import React from "react";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import "./chatListStyle.sass";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    width: "30%",
    backgroundColor: "#bacc64",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

export function ChatList({ onClickAdd }) {
  const classes = useStyles();
  const chats = useSelector(({ chatReducer }) => chatReducer.chats);
  const fire = useSelector(({ chatReducer }) => chatReducer.fire);
  const dispatch = useDispatch();
  
  const handleNavigate = (link) => {
    dispatch(push(link));
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {chats.map((item) => (
          <div
            key={item.id}
            className={
              fire.fire && item.id == fire.id ? "LinkBtn fire" : "LinkBtn"
            }
          >
            <ListItem button onClick={() => handleNavigate(`/chat/${item.id}`)}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={item.nameId} />
            </ListItem>
              <button
                className={"btnProfile"}
                onClick={() => handleNavigate(`/profile/${item.id}`)}
              >
                {item.nameId[0]}
              </button>
          </div>
        ))}
      </List>
      <button className={"btnAddChat"} onClick={onClickAdd}>
        Добавить чат
      </button>
    </div>
  );
}
