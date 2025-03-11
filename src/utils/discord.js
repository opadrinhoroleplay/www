// Simple username validation
export const validateDiscordUsername = (username) => {
  const DISCORD_USERNAME_REGEX = /^[a-zA-Z0-9_]{3,32}$/;
  return DISCORD_USERNAME_REGEX.test(username);
}; 