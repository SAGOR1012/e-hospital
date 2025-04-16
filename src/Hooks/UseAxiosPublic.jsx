import axios from 'axios';

const UseAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
    // 'easy-dev-server.vercel.app'
  });
  return axiosPublic;
};

export default UseAxiosPublic;
