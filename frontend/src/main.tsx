import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from './pages/home'
import Sale from './pages/sale'
import './index.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <Navigate replace to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'suningSale',
        element: <Sale />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
