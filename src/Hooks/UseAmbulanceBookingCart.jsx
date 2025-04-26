import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';
import UseAuth from './UseAuth';

const UseAmbulanceBookingCart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const { data: ambulanceBookingCart = [], refetch } = useQuery({
    queryKey: ['ambulanceBookingCart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/ambulancebookings?email=${user.email}`
      );
      return res.data;
    },
    // na dile oo hobe ei line
    enabled: !!user?.email, // Only run the query if user email is available
  });

  return [ambulanceBookingCart, refetch];
};

export default UseAmbulanceBookingCart;
