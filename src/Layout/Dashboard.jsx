import { NavLink, Outlet } from 'react-router-dom';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { MdOutlineDashboard } from 'react-icons/md';
import { CiBookmarkPlus } from 'react-icons/ci';
import { LuAmbulance } from 'react-icons/lu';

const Dashboard = () => {
  const axiosPublic = UseAxiosPublic();
  // for active nav link
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-sky-500 font-semibold'
      : 'text-gray-700 hover:text-sky-500  font-semibold';
  /* .............................. */
  const navItems = (
    <>
      <li>
        <NavLink
          to='/dashboard/home'
          className={navLinkClass}>
          <i className='text-xl'>
            <MdOutlineDashboard />
          </i>{' '}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/'
          className={navLinkClass}>
          <i className='text-xl'>
            <CiBookmarkPlus />
          </i>{' '}
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/'
          className={navLinkClass}>
          {' '}
          <i className='text-xl'>
            <LuAmbulance />
          </i>{' '}
          Ambulance{' '}
        </NavLink>
      </li>
    </>
  );

  /* for get all booki item form users */
  axiosPublic.get('/dashboard/bookings').then((res) => {
    console.log(res.data); // Show all bookings in dashboard
  });

  return (
    <div className='drawer lg:drawer-open flex flex-col md:flex-row  '>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col  justify-start'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-xs btn-primary drawer-button lg:hidden border  '>
          Dashboard
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'></label>
        <ul className='menu bg-[#d7e5f5] text-base-content min-h-full w-60 p-4'>
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
      <div className='flex-1 md:ml-10 mt-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
