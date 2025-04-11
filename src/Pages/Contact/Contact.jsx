import { Helmet } from 'react-helmet';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className=''>
      <Helmet>
        <title>E-hospital | Contact</title>
      </Helmet>
      {/* browser er upore tab title  likhar jonne react helmet use kora hoyeche */}
      {/* <Helmet>
                <title>SunCity | About</title>
            </Helmet> */}

      <section className='py-6 text-sky-500 '>
        <div className='grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x'>
          {/* contact informations */}
          <div className='py-6 md:py-0 md:px-6'>
            <h1 className='text-4xl font-bold my-4 text-center '>
              Contact information
            </h1>
            <div className='space-y-2 mt-10 '>
              <p className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 mr-2 sm:mr-6'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'></path>
                </svg>
                <span>Sonatongor ,Tenarimor ,Hazaribugh,Dhaka, Bangladesh</span>
              </p>
              <p className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 mr-2 sm:mr-6'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
                </svg>
                <span>+880 1639136200</span>
              </p>
              <p className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 mr-2 sm:mr-6'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
                <span>ar.sagor212@.com</span>
              </p>
              <div className=''>
                <div className='flex items-center gap-2 text-xl '>
                  <p>Follow us:</p>
                  <i className='theme-color cursor-pointer hover:text-purple-800'>
                    <FaFacebookF />
                  </i>
                  <i className='theme-color cursor-pointer hover:text-purple-800'>
                    <FaInstagram />
                  </i>
                  <i className='theme-color cursor-pointer hover:text-purple-800'>
                    <FaTwitter />
                  </i>
                  <i className='theme-color cursor-pointer hover:text-purple-800'>
                    <FaYoutube />
                  </i>
                </div>
              </div>
            </div>
            {/* <div className="mt-10 ">
                            <GoogleMap></GoogleMap>
                        </div> */}
          </div>

          {/* form section */}
          <form
            noValidate=''
            className='flex flex-col py-6 space-y-6 md:py-0 md:px-6 '>
            <label className='block'>
              <span className='mb-1'>Full name</span>
              <input
                type='text'
                placeholder='Leroy Jenkins'
                className='block w-full p-2 rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-purple-600 dark:bg-gray-100'
              />
            </label>
            <label className='block'>
              <span className='mb-1'>Email address</span>
              <input
                type='email'
                placeholder='leroy@jenkins.com'
                className='block w-full p-2 rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-purple-600 dark:bg-gray-100'
              />
            </label>
            <label className='block'>
              <span className='mb-1'>Message</span>
              <textarea
                rows='3'
                className='block w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 focus:dark:ring-purple-600 dark:bg-gray-100'></textarea>
            </label>
            <button
              type='button'
              className='self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-sky-500 dark:text-gray-50 focus:dark:ring-purple-600 hover:scale-105 hover:transition'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
