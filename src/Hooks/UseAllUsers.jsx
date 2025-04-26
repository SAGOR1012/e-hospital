import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from './UseAxiosPublic';

const UseAllUsers = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      console.log(res.data);
      return res.data;
    },
  });
  return [users, refetch];
};

export default UseAllUsers;
