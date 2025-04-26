import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseAllAppoinment = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const res = await axiosPublic.get('/bookings');
      //   console.log(res.data);
      return res.data;
    },
  });
  return [appointments, refetch];
};

export default UseAllAppoinment;
