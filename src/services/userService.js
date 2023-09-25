import endpoints from '../endpoints.json';
import { request, getOptions } from './utils.js';

export async function getUserById(userId) {
    return await request(endpoints.getUserById + userId, getOptions());
}

export async function getSuggestions(string) {
    return await request(endpoints.getSuggestions + string, getOptions());
}

