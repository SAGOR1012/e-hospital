import axios from 'axios';

const url = import.meta.env.VITE_API_BASEURL; // url form env file
const axiosSecure = axios.create({
  baseURL: url,
});
const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
