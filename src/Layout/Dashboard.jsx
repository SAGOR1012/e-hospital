import { NavLink, Outlet } from 'react-router-dom';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import { MdOutlineDashboard } from 'react-icons/md';
import { CiBookmarkPlus } from 'react-icons/ci';
import { LuAmbulance } from 'react-icons/lu';

const Dashboard = () => {
  const axiosPublic = UseAxiosPublic();

  // Active and Inactive NavLink Styling
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center gap-3 text-blue-600 bg-blue-100 px-4 py-2 rounded-lg font-semibold'
      : 'flex items-center gap-3 text-gray-500 hover:text-blue-500 px-4 py-2 font-semibold transition-all ';

  const navItems = (
    <>
      <li>
        <NavLink
          to='/dashboard/home'
          className={navLinkClass}>
          <MdOutlineDashboard className='text-2xl' /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/dashboard/dashboardappointments'
          className={navLinkClass}>
          <CiBookmarkPlus className='text-2xl' /> Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/dashboard/dashboardambulancebookinglist'
          className={navLinkClass}>
          <LuAmbulance className='text-2xl' /> Ambulance
        </NavLink>
      </li>
    </>
  );

  axiosPublic.get('/dashboard/bookings').then((res) => {
    console.log(res.data);
  });

  return (
    <div className='drawer lg:drawer-open min-h-screen bg-white'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />

      {/* Main Content */}
      <div className='drawer-content flex flex-col'>
        {/* Small screen button */}
        <div className='p-2'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-sm btn-primary drawer-button lg:hidden'>
            Open Dashboard
          </label>
        </div>

        {/* Outlet Content */}
        <div className='px-4 md:mx-10 bg-white  min-h-[90vh]  pt-10'>
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'></label>

        <div className='w-60 min-h-full bg-white flex flex-col items-start px-6 py-8 space-y-8 border-r shadow-md'>
          {/* Logo Section */}
          <div className='text-2xl font-bold text-black'>
            <span className='text-blue-600'>OUR</span> LOGO
          </div>

          {/* Navigation Items */}
          <ul className='flex flex-col gap-2 w-full'>{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
