import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* outlate */ }
            <Outlet></Outlet>
            {/* whats up logo */ }
            <a
                href=' https://wa.me/+8801639136200?text=Hi Sagor'
                target='_blank'
                className='fixed bottom-16 right-6 z-50 hover:scale-105 hover:transition'>
                <i className='text-green-500 text-5xl lg:text-7xl cursor-pointer'>
                    <FaWhatsapp />
                </i>
            </a>
            <Footer></Footer>
        </div>
    );
};

export default Main;