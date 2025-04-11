import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const Signup = () => {
  /* create a context for call signin function  from AuthProvider  */
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    /* destructure  data object to get email and password */
    const { email, password } = data;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('new user create:', user);
      })
      /* error message form firebase  */
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
        <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-sm flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className='text-center'>
              <Link
                to='/'
                className='btn btn-ghost text-xl md:text-2xl text-sky-500'>
                E-hospital
              </Link>
            </div>
            <div className='mt-12 flex flex-col items-center'>
              <div className='w-full flex-1 mt-8'>
                <div className='flex flex-col items-center'>
                  <button className='w-full max-w-xs font-semibold shadow-sm rounded-sm py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'>
                    <div className='bg-white p-2 rounded-full'>
                      <svg
                        className='w-4'
                        viewBox='0 0 533.5 544.3'>
                        <path
                          d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                          fill='#4285f4'
                        />
                        <path
                          d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                          fill='#34a853'
                        />
                        <path
                          d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                          fill='#fbbc04'
                        />
                        <path
                          d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                          fill='#ea4335'
                        />
                      </svg>
                    </div>
                    <span className='ml-4'>Sign up with Google</span>
                  </button>
                </div>

                <div className='my-12 border-b text-center'>
                  <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                    Or sign up with e-mail
                  </div>
                </div>

                {/* 🔽 Signup Form Starts Here */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className='mx-auto max-w-xs'>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className='w-full px-8 py-4 rounded-sm font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5'
                    type='text'
                    placeholder='Full Name'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-xs -mt-4 mb-4'>
                      {errors.name.message}
                    </p>
                  )}

                  <input
                    {...register('email', { required: 'Email is required' })}
                    className='w-full px-8 py-4 rounded-sm font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5'
                    type='email'
                    placeholder='Email'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs -mt-4 mb-4'>
                      {errors.email.message}
                    </p>
                  )}

                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    className='w-full px-8 py-4 rounded-sm font-medium border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5'
                    type='password'
                    placeholder='Password'
                  />
                  {errors.password && (
                    <p className='text-red-500 text-xs -mt-4 mb-4'>
                      {errors.password.message}
                    </p>
                  )}

                  <button
                    type='submit'
                    className='tracking-wide bg-indigo-500 text-gray-100 w-full py-4 rounded-sm hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                    <svg
                      className='w-6 h-6 -ml-2'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
                      <circle
                        cx='8.5'
                        cy='7'
                        r='4'
                      />
                      <path d='M20 8v6M23 11h-6' />
                    </svg>
                    <span className='ml-3'>Sign Up</span>
                  </button>
                </form>

                <p className='mt-6 text-xs text-gray-600 text-center'>
                  Already have an account?
                  <Link
                    to='/login'
                    className='ml-1 text-sky-500'>
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
