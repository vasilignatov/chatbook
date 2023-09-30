import endpoints from '../endpoints.json';
import { request, getOptions } from './utils.js';

export async function getUserById(userId) {
    return await request(endpoints.getUserById + userId, getOptions());
}

export async function getSuggestions(string) {
    return await request(endpoints.getSuggestions + string, getOptions());
}

export async function updateUserInfo(userId, userData) {
    return await request(endpoints.updateUserById + userId, getOptions('POST', userData));
}

export async function uploadProfilePicture(fileData, imageKitData) {
    return await request(endpoints.uploadImg, getOptions('POST', {
        file: fileData,
        publicKey: "public_BrrOwcySJsmMwiYPn7AABrM8mW8=",
        signature: imageKitData.signature,
        expire: imageKitData.expire,
        token: imageKitData.token,
        fileName: fileData.name
    }));
}

