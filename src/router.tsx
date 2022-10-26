import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'ui';
import { HomePage } from 'pages/home';
import { PlayPage } from 'pages/play';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: '/:id',
    element: (
      <MainLayout>
        <PlayPage />
      </MainLayout>
    ),
  },
]);
