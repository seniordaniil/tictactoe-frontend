import { io } from 'socket.io-client';

export const client = io(
  `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${
    window.location.host
  }`,
  { transports: ['websocket'] },
);
