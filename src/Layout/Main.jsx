import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* outlate */ }
            <Outlet></Outlet>
        </div>
    );
};

export default Main;