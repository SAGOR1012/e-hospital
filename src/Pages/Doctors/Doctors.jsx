import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaRegUser,
} from 'react-icons/fa';
import UseDoctorsData from '../../Hooks/UseDoctorsData';

const Doctors = () => {
  /* custom hook theke data fatch  kora ache  */
  const [doctors] = UseDoctorsData();
  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
      {/* Doctor Heading  */}
      <div className='flex justify-center mb-5'>
        <h1 className='text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  text-gray-600 uppercase '>
          Our Doctors
        </h1>
      </div>
      {/* doctor */}
      <div className='grid md:grid-cols-2 gap-8'>
        {doctors.map((doctors) => (
          <div
            data-aos='fade-up'
            className='flex flex-col md:flex-row items-center gap-6 p-4 border rounded-lg shadow-sm'>
            <img
              src={doctors.image}
              alt={doctors.name}
              className='w-24 h-24 rounded-full border-4 border-cyan-500 object-cover'
            />
            <div className='flex-1'>
              <div className='bg-gray-100 flex items-center px-4 py-2 mb-3 rounded'>
                {/* icon */}
                <div className='bg-cyan-500 text-white p-2 rounded mr-3'>
                  <FaRegUser />
                </div>
                <h3 className='text-gray-800 font-semibold'>
                  {doctors.name},{' '}
                  <span className='font-normal'>{doctors.qualification}</span>
                </h3>
              </div>
              <p className='text-gray-700 mb-4'>{doctors.description}</p>
              <hr className='my-3' />
              <p className='italic text-sm text-gray-500'>
                {doctors.specialist}
              </p>
              <p className='text-sm mt-1'>
                Email:{' '}
                <a
                  href={`mailto:${doctors.email}`}
                  className='text-cyan-500 hover:underline'>
                  {doctors.email}
                </a>
              </p>
              <div className='flex space-x-3 mt-4 text-gray-600 text-lg'>
                <FaTwitter className='hover:text-cyan-500 cursor-pointer' />
                <FaFacebookF className='hover:text-blue-600 cursor-pointer' />
                <FaGooglePlusG className='hover:text-red-500 cursor-pointer' />
                <FaLinkedinIn className='hover:text-blue-700 cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
