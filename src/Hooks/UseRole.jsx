// import { useContext } from 'react';

// import { useQuery } from '@tanstack/react-query';
// import { AuthContext } from '../Providers/AuthProvider';
// import UseAxiosPublic from './UseAxiosPublic';

// const UseRole = () => {
//   const { user } = useContext(AuthContext);
//   const userEmail = user?.email;
//   console.log(user.email);
//   const axiosPublic = UseAxiosPublic();

//   const { data, isLoading } = useQuery({
//     queryKey: ['userRole', user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/userrole/${userEmail}`);
//       // console.log(res.data);
//       return res.data;
//     },
//   });
//   console.log(data);
//   return [data?.role, isLoading];
// };

// export default UseRole;
