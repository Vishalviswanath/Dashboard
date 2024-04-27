import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Employee from './components/employee/Employee';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: 'employee',
    element: <Employee />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
