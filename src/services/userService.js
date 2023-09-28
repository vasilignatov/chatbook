import endpoints from '../endpoints.json';
import { request, getOptions } from './utils.js';

export async function getUserById(userId) {
    return await request(endpoints.getUserById + userId, getOptions());
}

export async function getSuggestions(string) {
    return await request(endpoints.getSuggestions + string, getOptions());
}

export async function uploadProfilePicture(data, user) {
    return await request(endpoints.uploadImg, getOptions('POST', {
        file: data.imageUrl,
        publicKey: "public_BrrOwcySJsmMwiYPn7AABrM8mW8=",
        signature: '',
        expire: '',
        token: user.accessToken,
        fileName: data.imageUrl.name
    }));
}

