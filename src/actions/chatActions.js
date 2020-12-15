export const ADD_CHAT = "@@chat/ADD_CHAT";

export const addChat = (name, age) => ({
  type: ADD_CHAT,
  name,
  age,
});
