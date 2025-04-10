import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/doctors'>Doctors</Link>
            </li>
            <li>
                <Link to='/appointment'>Appointments</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </>
    );
    return (
        <div className=' overflow-hidden'>
            {/* nav 1 */ }
            <div className='navbar bg-gray-800  flex justify-between'>
                <div className=' '>
                    <Link to='/' className='btn btn-ghost  text-xl md:text-2xl  text-sky-500'>
                        E-hospital
                    </Link>
                </div>
                <div className=''>
                    {/* <div className='dropdown dropdown-end'>
                        <div
                            tabIndex={ 0 }
                            role='button'
                            className='btn btn-ghost btn-circle avatar'>
                            <div className='w-10 rounded-full'>
                                <img
                                    alt='Tailwind CSS Navbar component'
                                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={ 0 }
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                            <li>
                                <a className='justify-between'>
                                    Profile
                                    <span className='badge'>New</span>
                                </a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div> */}
                    <div className='navbar-end'>
                        <Link to='/login' className='btn border border-sky-500 text-sky-500 '>Login</Link>
                    </div>
                </div>
            </div>
            {/* Navbar 2 */ }
            <div className='navbar  w-full   bg-gray-200 border-b-4 border-sky-500 '>
                {/* <div className='border border-red-500 w-full'>
                    <div className='dropdown'>
                        <ul
                            tabIndex={ 0 }
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>

                            { navItems }
                        </ul>
                    </div>
                </div> */}
                <div className=' navbar-end w-full   uppercase'>
                    <ul className='menu menu-horizontal px-1'>

                        { navItems }
                    </ul>
                </div>
                {/* <div className='navbar-end'>
                    <Link to='/login' className='btn border border-sky-500 text-sky-500 '>Login</Link>
                </div> */}
            </div>


        </div>
    );
};

export default Navbar;
