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
  const ap = AllAmbulanceBookings;
  console.log('ambulance ', ap);
  // console.log(AllUsers);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4'>
      <DashboardStateCard
        title='Appointments'
        value={AllAppointments.length}
        color='bg-blue-400'
        Icon={HiOutlineCalendar}
      />
      <DashboardStateCard
        title='Booking Ambulance'
        value={AllAmbulanceBookings.length}
        color='bg-pink-400'
        Icon={HiOutlineTruck}
      />
      <DashboardStateCard
        title='Operation'
        value='46'
        color='bg-sky-400'
        Icon={HiOutlineScissors}
      />
      <DashboardStateCard
        title='Total Users'
        value={AllUsers.length}
        color='bg-purple-400'
        Icon={HiOutlineDocumentReport}
      />
    </div>
  );
};

export default DashboardStats;
