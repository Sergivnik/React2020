// ChatList.jsx
import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { push } from "connected-react-router";
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

function ChatList({ onClickAdd, chats, push, fire }) {
  const classes = useStyles();
  
  const handleNavigate = (link) => {
    push(link);
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
const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  fire: chatReducer.fire,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
