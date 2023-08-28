import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from './Pages/MainPage';
import { AllTodosPage } from './Pages/AllTodosPage';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    //  errorElement: <ErrorPage />,
      children: [
        {
          path: '/MainPage',
          element: <MainPage/>

        },
        {
          path: '/allTasks',
          element: <AllTodosPage/>

        }

      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
          <RouterProvider router={router}>
          <App />
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
          </RouterProvider>

    </Provider>
);


