const host = 'https://chatbook-rest-api.onrender.com/';

export default {
    "login": `${host}/auth/login`,
    "register": `${host}/auth/register`,
    "logout": `${host}/auth/logout`,
    "refreshTokens": `${host}/auth/refresh-tokens`,

    "getUserById": `${host}/users/`,
    "updateUserById": `${host}/users/`,
    "getSuggestions": `${host}/users/suggestions?search=`,

    "getRecent": `${host}/chat`,
    "getChatByRoomId": `${host}/chat/`,
    "initiate": `${host}/chat/initiate`,

    "uploadImg": "https://upload.imagekit.io/api/v1/files/upload"
}