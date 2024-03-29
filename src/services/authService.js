import endpoints from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function login(email, password) {
    return await request(endpoints.login, getOptions('POST', { email, password }));
}

export async function register({ email, firstName, lastName, password }) {
    return await request(endpoints.register, getOptions('POST', { email, firstName, lastName, password }));
}

export async function refreshTokens(refreshToken) {
    return await request(endpoints.refreshTokens, getOptions('POST', refreshToken));
}

export async function logout(refreshToken) {
    return await request(endpoints.logout, getOptions('POST', refreshToken));
}


