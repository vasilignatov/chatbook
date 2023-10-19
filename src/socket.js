import { io } from 'socket.io-client';

const URL = 'https://chatbook-rest-api.onrender.com';

export const socket = io(URL);