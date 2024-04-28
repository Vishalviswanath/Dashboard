import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Employee from './components/employee/Employee.jsx';
import App from './App.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'employee',
        element: <Employee />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
