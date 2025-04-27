  import React, { useContext } from 'react';
  import { Link, NavLink } from 'react-router-dom';
  import { AuthContext } from '../providers/AuthProvider';
  // import Login from '../Pages/Login/Login';
  import mainlogo from '../assets/main-logo.png';
  import { LuAmbulance } from 'react-icons/lu';
  import UseBookingCart from '../Hooks/UseBookingCart';
  import UseAmbulanceBookingCart from '../Hooks/UseAmbulanceBookingCart';

  const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('User Role:', user?.role);
    console.log('Is Admin?', user?.role === 'admin');
    // console.log(user.email);
    const [bookingCart] = UseBookingCart(); //booking item fetch kora hoyeche ekhen
    const [ambulanceBooking] = UseAmbulanceBookingCart();
    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    };
    /* ........................ */
    // for active nav link
    const navLinkClass = ({ isActive }) =>
      isActive
        ? 'text-sky-500 font-semibold'
        : 'text-gray-700 hover:text-sky-500';
    /* .............................. */

    const navItems = (
      <>
        <li>
          <NavLink
            to='/mybooking'
            className={navLinkClass}>
            <LuAmbulance className='text-xl' />
            <div className='badge badge-sm badge-secondary'>
              +{bookingCart.length} | {ambulanceBooking.length}
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={navLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/doctors'
            className={navLinkClass}>
            Doctors
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/appointment'
            className={navLinkClass}>
            Appointment
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={navLinkClass}>
            Contact
          </NavLink>
        </li>

        {/* Only show Dashboard if user is admin */}
        {user?.role === 'admin' && (
          <li>
            <NavLink
              to='/dashboard/home'
              className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
        )}
      </>
    );

    return (
      <div className=' overflow-hidden '>
        {/* nav 1 */}
        <div className='navbar bg-gray-800  flex justify-between md:px-10'>
          <aside>
            <Link
              to='/'
              className='btn btn-ghost '>
              <img
                className='w-16 h-16 md:w-24 md:h-24'
                src={mainlogo}
                alt=''
              />{' '}
            </Link>
          </aside>
          <div className=''>
            <div className='navbar-end'>
              {/* jodi login kora thake tahole image show korbe  */}
              {user ? (
                <>
                  <div
                    className='dropdown dropdown-end'
                    title={user?.displayName}>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle border-2 hover:border-sky-500 avatar'>
                      <div className='w-10 rounded-full'>
                        {/* referrerPolicy="no-referrer" src={user?.photoURL} eita use korle gmail er photo show korbe */}
                        <img
                          referrerPolicy='no-referrer'
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                      <li>
                        <a onClick={handleLogOut}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                /* jodi login kora na thake tahoel login button show korbe */
                <>
                  <Link
                    to='/login'
                    className='btn border border-sky-500 text-sky-500 '>
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Navbar 2 */}
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
            <ul className='menu menu-horizontal px-1'>{navItems}</ul>
          </div>
          {/* <div className='navbar-end'>
                      <Link to='/login' className='btn border border-sky-500 text-sky-500 '>Login</Link>
                  </div> */}
        </div>
      </div>
    );
  };

  export default Navbar;
