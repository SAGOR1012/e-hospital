import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Components/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Contact from "../Pages/Contact/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);
export default router;