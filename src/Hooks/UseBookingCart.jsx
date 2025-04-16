import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from './UseAxiosSecure';
import UseAuth from './UseAuth';

const UseBookingCart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  //tannTack Queries
  const { data: bookingCart = [], refetch } = useQuery({
    queryKey: ['bookingCart', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`); // erkom dile different different user er separate booking cart hobe nahole ekjoner booking onnojon er kache show korbe
      return res.data;
    },
  });
  return [bookingCart, refetch];
};

export default UseBookingCart;
