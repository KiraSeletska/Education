import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingleFormulaPage } from './Pages/SingleFormulaPage';
import { MainPage } from './Pages/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/mainPage",
        element: <MainPage />,
      },
      {
        path: "/:name",
        element: <SingleFormulaPage />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
);


