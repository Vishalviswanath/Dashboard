import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Employee from './components/employee/Employee.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Integration from './components/integration/Integration.jsx';
import Dash from './components/dashboard/Dash.jsx';
import Onboarding from './components/onboarding/Onboarding.jsx';
import TakeTest from './components/taketest/TakeTest.jsx';
import EmployeeDetails from './components/details/EmployeeDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'employee',
        element: <Employee />,
      },
      { path: 'employeedetails', element: <EmployeeDetails /> },
      {
        path: 'integration',
        element: <Integration />,
      },
      {
        path: '/',
        element: <Dash />,
      },
      {
        path: 'onboarding',
        element: <Onboarding />,
      },
      {
        path: 'taketest',
        element: <TakeTest />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
