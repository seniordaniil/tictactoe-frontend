import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ClientProvider } from 'features/client';
import { store } from './store';
import { router } from './router';
import { client } from 'client';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <ClientProvider client={client}>
        <RouterProvider router={router} />
      </ClientProvider>
    </Provider>
  );
};
