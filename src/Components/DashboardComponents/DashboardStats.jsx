import { FaUserAlt } from 'react-icons/fa';
import UseAllAmbulanceBookings from '../../Hooks/UseAllAmbulanceBookings';
import UseAllAppoinment from '../../Hooks/UseAllAppoinment';
import UseAllUsers from '../../Hooks/UseAllUsers';
import DashboardStateCard from '../../Shared/DashboardStateCard';
import {
  HiOutlineCalendar,
  HiOutlineTruck,
  HiOutlineScissors,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const DashboardStats = () => {
  const [AllUsers] = UseAllUsers();
  const [AllAppointments] = UseAllAppoinment();
  const [AllAmbulanceBookings] = UseAllAmbulanceBookings();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
      <DashboardStateCard
        title='Appointments'
        value={AllAppointments.length}
        textColor='text-blue-400' // Passing text color instead of bg color
        Icon={HiOutlineCalendar}
        status='Pending'
      />
      <DashboardStateCard
        title='Ambulance Bookings'
        value={AllAmbulanceBookings.length}
        textColor='text-pink-400'
        Icon={HiOutlineTruck}
        status='Pending'
      />
      {/* <DashboardStateCard
        title='Operations'
        value='46'
        textColor='text-sky-400'
        Icon={HiOutlineScissors}
      /> */}
      <DashboardStateCard
        title='Total Users'
        value={AllUsers.length}
        textColor='text-purple-400'
        Icon={FaUserAlt}
        status='Verified'
      />
    </div>
  );
};

export default DashboardStats;
