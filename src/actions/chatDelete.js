export const DELETE_CHAT = "@@chat/DELETE_CHAT";

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  id,
});
