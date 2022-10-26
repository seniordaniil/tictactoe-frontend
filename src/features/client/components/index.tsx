import React, { FC } from 'react';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../models';

interface ClientProviderProps {
  client: Socket;
  children: React.ReactNode;
}

export const ClientProvider: FC<ClientProviderProps> = ({
  client,
  children,
}) => {
  return (
    <SocketContext.Provider value={client}>{children}</SocketContext.Provider>
  );
};
