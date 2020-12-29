export const ADD_CHAT = "@@chat/ADD_CHAT";

export const addChat = (chatKey, name, age) => ({
  type: ADD_CHAT,
  chatKey,
  name,
  age,
});
