import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main.jsx';
import Home from '../Components/Home/Home.jsx';
import Login from '../Pages/Login/Login.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Doctors from '../Pages/Doctors/Doctors.jsx';
import Appointment from '../Pages/Appoinment/Appointment.jsx';
import PaymentForm from '../Pages/Payment/PaymentForm.jsx';
import Signup from '../Pages/Signup/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/doctors',
        element: <Doctors></Doctors>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/payment',
        element: <PaymentForm></PaymentForm>,
      },
    ],
  },
]);
export default router;
