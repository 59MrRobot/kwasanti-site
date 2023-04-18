import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { School } from './pages/School';
import { Home } from './pages/Home';

const root = createRoot(document.getElementById('root')!);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/school/:id",
        element: <School />,
      },
    ]
  },
  {
    path: "/auth/login",
    element: <Login />,
  }

]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
