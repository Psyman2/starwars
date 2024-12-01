import { writable } from 'svelte/store';

export const planets = writable([]);
export const loading = writable(true);
export const loggedInUser = writable(null); // Store for logged-in user
