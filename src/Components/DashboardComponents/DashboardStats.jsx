import DashboardStateCard from '../../Shared/DashboardStateCard';
import {
  HiOutlineCalendar,
  HiOutlineTruck,
  HiOutlineScissors,
  HiOutlineDocumentReport,
} from 'react-icons/hi';

const DashboardStats = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4'>
      <DashboardStateCard
        title='Appointments'
        value='250'
        percentage='40'
        color='bg-blue-400'
        Icon={HiOutlineCalendar}
      />
      <DashboardStateCard
        title='Booking Ambulance'
        value='140'
        percentage='20'
        color='bg-pink-400'
        Icon={HiOutlineTruck}
      />
      <DashboardStateCard
        title='Operation'
        value='46'
        percentage='15'
        color='bg-sky-400'
        Icon={HiOutlineScissors}
      />
      <DashboardStateCard
        title='Total Invoice'
        value='1,378'
        percentage='68'
        color='bg-purple-400'
        Icon={HiOutlineDocumentReport}
      />
    </div>
  );
};

export default DashboardStats;
