import endpoints from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function getUserById(userId) {
    return await request(endpoints.getUserById + userId, getOptions());
}

export async function getSuggestions(string) {
    return await request(endpoints.getSuggestions + string, getOptions());
}

export async function updateUserInfo(userId, userData) {
    return await request(endpoints.updateUserById + userId, getOptions('PUT', userData));
}


