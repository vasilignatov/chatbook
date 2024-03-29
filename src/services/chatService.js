import endpoints from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function getRecentChat() {
    return await request(endpoints.getRecent, getOptions());
}

export async function getChatMessagesByRoomId(roomId) {
    return await request(endpoints.getChatByRoomId + roomId, getOptions());
}

export async function initiate(userIds, type = 'c2c') {
    return await request(endpoints.initiate, getOptions('POST', { type, userIds }));
}
