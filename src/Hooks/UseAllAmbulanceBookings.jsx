import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseAllAmbulanceBookings = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: ambulanceBookings = [], refetch } = useQuery({
    queryKey: ['ambulanceBookings'],
    queryFn: async () => {
      const res = await axiosPublic.get('/ambulancebookings');
      //   console.log(res.data);
      return res.data;
    },
  });
  return [ambulanceBookings, refetch];
};

export default UseAllAmbulanceBookings;
