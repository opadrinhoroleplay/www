import { validateDiscordUsername } from './discord';

// Regex pattern for valid Discord usernames (3-32 characters, alphanumeric, underscores)
const DISCORD_USERNAME_REGEX = /^[a-zA-Z0-9_]{3,32}$/;

export const parseReferralFromURL = () => {
  // Get the first path segment after the domain
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const potentialUsername = pathSegments[0];

  if (!potentialUsername) return null;

  // Validate if it matches Discord username format
  if (!validateDiscordUsername(potentialUsername)) return null;

  return potentialUsername;
};

export const getReferralURL = (username) => {
  if (!username || !validateDiscordUsername(username)) return '/';
  return `/${username}`;
};

export const storeReferral = (username) => {
  if (!username) return;
  localStorage.setItem('referral_username', username);
};

export const getReferral = () => {
  return localStorage.getItem('referral_username');
};

export const clearReferral = () => {
  localStorage.removeItem('referral_username');
}; 