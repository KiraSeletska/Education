import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.css';
import App from './App';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "/categories",
          element: <div>Категории будут тут</div>
  
        },
        {
        path: "/coupon",
        element: <div>А купоны тут</div>
      },
      {
        path: "/sales",
        element: <div>Распродажи тут</div>
  
      },
      {
        path: "/contacts",
        element:  <div>А наши контакты тут</div>
  
      },
      {
        path: "/shoppingBag",
        element:  <div>Корзина  </div>
  
      },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>

);

