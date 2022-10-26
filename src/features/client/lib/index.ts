import { useContext } from 'react';
import { SocketContext } from '../models';

export const useClient = () => useContext(SocketContext);
