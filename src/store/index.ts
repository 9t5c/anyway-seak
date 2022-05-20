import { writable } from 'svelte/store';

export const avatar = writable('/JJ.jpg');

export const nick = writable('JJ');

export const content = writable('我做得真好呀');

export const el = writable<HTMLDivElement | null>(null);
