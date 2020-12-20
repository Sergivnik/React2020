export const FIRE_CHAT = "@@chat/FIRE_CHAT";

export const fireChat = (fire, id) => ({
  type: FIRE_CHAT,
  fire,
  id,
});
