import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Employee from './components/employee/Employee.jsx';
import App from './App.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Integration from './components/integration/Integration.jsx';
import Dash from './components/dashboard/Dash.jsx';
import Onboarding from './components/onboarding/Onboarding.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'employee',
        element: <Employee />,
      },
      {
        path: 'integration',
        element: <Integration />,
      },
      {
        path: 'dash',
        element: <Dash />,
      },
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
